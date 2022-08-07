import { Canvas, Edge, MarkerArrow, Node, CanvasRef } from "reaflow";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TreeState } from "../lib/types";
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import EventContext from "../lib/EventContext";

const EmptyElt = () => {
  return null;
};

const TreeRenderer = ({
  nodes,
  edges,
  width,
  height,
}: TreeState & {
  width: number;
  height: number;
}) => {
  const [paneWidth, setPaneWidth] = useState(2000);
  const [paneHeight, setPaneHeight] = useState(2000);

  const canvasRef = useRef<CanvasRef>(null);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  const calculatePaneWidthAndHeight = useCallback(() => {
    let newHeight = 0;
    let newWidth = 0;
    canvasRef?.current?.layout?.children?.forEach((node) => {
      if (node.y + node.height > newHeight) newHeight = node.y + node.height;
      if (node.x + node.width > newWidth) newWidth = node.x + node.width;
    });

    // 100 - extra padding/offset
    setPaneHeight(newHeight < height ? height : newHeight + 100);
    setPaneWidth(newWidth < width ? width : newWidth + 100);
  }, [width, height]);

  const eventContext = useContext(EventContext);

  useEffect(() => {
    if (transformRef.current) {
      transformRef.current.centerView(1);
    }
  }, [eventContext.zoom]);

  return (
    <TransformWrapper
      wheel={{ step: 0.1 }}
      limitToBounds={false}
      maxScale={4}
      zoomAnimation={{
        animationType: "linear",
      }}
      ref={transformRef}
    >
      <TransformComponent>
        <Canvas
          className="canvas"
          nodes={nodes}
          edges={edges}
          node={({ ...props }) => {
            return (
              <Node
                {...props}
                style={{ stroke: "#1a192b", fill: "white", strokeWidth: 1 }}
                label={<EmptyElt />}
              >
                {(event) => (
                  <foreignObject
                    height={event.height}
                    width={event.width}
                    x={0}
                    y={0}
                    style={{
                      pointerEvents: "none",
                      position: "absolute",
                      left: 0,
                      top: 0,
                    }}
                  >
                    <div className="p-2.5">
                      <div className="whitespace-pre mx-auto inline-block">
                        {props.properties.text}
                      </div>
                    </div>
                  </foreignObject>
                )}
              </Node>
            );
          }}
          arrow={<MarkerArrow style={{ fill: "#b1b1b7" }} />}
          edge={<Edge className="edge" />}
          fit={true}
          readonly={true}
          dragEdge={null}
          dragNode={null}
          ref={canvasRef}
          onLayoutChange={calculatePaneWidthAndHeight}
          maxHeight={paneHeight}
          maxWidth={paneWidth}
          width={width}
          height={height}
          zoomable={false}
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default TreeRenderer;
