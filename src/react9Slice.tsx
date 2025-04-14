import React, { ReactNode, CSSProperties } from "react"

interface ImageSize {
  x: number
  y: number
}

interface React9SliceProps {
  image: string
  border?: number
  width?: number
  height?: number
  children?: ReactNode
  imageSize: ImageSize
  style?: CSSProperties
}

const React9Slice: React.FC<React9SliceProps> = ({
  image,
  border = 8,
  width = 128,
  height = 128,
  children,
  imageSize,
  style = {},
}) => {
  const BASE_STYLE: CSSProperties = {
    width: border,
    height: border,
    display: "inline-flex",
    backgroundImage: image ? `url(${image})` : undefined,
    imageRendering: "pixelated",
  }

  const IMAGE_X_SIZE_MINUS_BORDER = imageSize.x - border * 2
  const IMAGE_Y_SIZE_MINUS_BORDER = imageSize.y - border * 2
  const IMAGE_X_SIZE_AND_BORDER = imageSize.x + border
  const IMAGE_Y_SIZE_AND_BORDER = imageSize.y + border
  const BORDER_AND_WIDTH = border + width
  const MINUS_BORDER = -border
  const SCALE_X = width / IMAGE_X_SIZE_MINUS_BORDER
  const SCALE_Y = height / IMAGE_Y_SIZE_MINUS_BORDER
  const ABSOLUTE = "absolute"
  const RELATIVE = "relative"

  return (
    <div
      className="r9s"
      style={{
        lineHeight: 0,
        width: width + border * 2,
        height: height + border * 2,
        position: RELATIVE,
      }}
    >
      <div style={{ position: RELATIVE }}>
        <div className="r9s-nw" style={{ ...BASE_STYLE }} />
        <div
          className="r9s-n"
          style={{
            ...BASE_STYLE,
            width: IMAGE_X_SIZE_MINUS_BORDER,
            transformOrigin: "left",
            transform: `scaleX(${SCALE_X})`,
            backgroundPositionX: MINUS_BORDER,
            position: ABSOLUTE,
            left: border,
            top: 0,
          }}
        />
        <div
          className="r9s-ne"
          style={{
            ...BASE_STYLE,
            backgroundPositionX: IMAGE_X_SIZE_AND_BORDER,
            position: ABSOLUTE,
            top: 0,
            left: BORDER_AND_WIDTH,
          }}
        />
      </div>

      <div style={{ position: RELATIVE, height, width: width + border * 2 }}>
        <div
          className="r9s-w"
          style={{
            ...BASE_STYLE,
            height: IMAGE_Y_SIZE_MINUS_BORDER,
            backgroundPositionY: MINUS_BORDER,
            transformOrigin: "left top",
            transform: `scaleY(${SCALE_Y})`,
          }}
        />
        <div
          className="r9s-c"
          style={{
            ...BASE_STYLE,
            width: IMAGE_X_SIZE_MINUS_BORDER,
            height: IMAGE_Y_SIZE_MINUS_BORDER,
            lineHeight: 1,
            verticalAlign: "top",
            transform: `scaleX(${SCALE_X}) scaleY(${SCALE_Y})`,
            transformOrigin: "left top",
            backgroundPositionX: MINUS_BORDER,
            backgroundPositionY: MINUS_BORDER,
            position: ABSOLUTE,
            left: border,
            top: 0,
          }}
        />
        <div
          className="r9s-e"
          style={{
            ...BASE_STYLE,
            height: IMAGE_Y_SIZE_MINUS_BORDER,
            backgroundPositionX: IMAGE_X_SIZE_AND_BORDER,
            backgroundPositionY: MINUS_BORDER,
            position: ABSOLUTE,
            top: 0,
            left: BORDER_AND_WIDTH,
            transformOrigin: "left top",
            transform: `scaleY(${SCALE_Y})`,
          }}
        />
        <div
          className="r9-content"
          style={{
            position: ABSOLUTE,
            top: border * 0.5,
            left: border,
            width,
            height,
            zIndex: 10,
            boxSizing: "border-box",
            lineHeight: 1.39,
            ...style,
          }}
        >
          {children}
        </div>
      </div>

      <div style={{ position: ABSOLUTE, top: height + border }}>
        <div
          className="r9s-sw"
          style={{
            ...BASE_STYLE,
            backgroundPositionY: IMAGE_Y_SIZE_AND_BORDER,
          }}
        />
        <div
          className="r9s-s"
          style={{
            ...BASE_STYLE,
            width: IMAGE_X_SIZE_MINUS_BORDER,
            transformOrigin: "left",
            transform: `scaleX(${SCALE_X})`,
            backgroundPositionX: MINUS_BORDER,
            backgroundPositionY: IMAGE_Y_SIZE_AND_BORDER,
            position: ABSOLUTE,
            left: border,
            top: 0,
          }}
        />
        <div
          className="r9s-se"
          style={{
            ...BASE_STYLE,
            backgroundPositionX: IMAGE_X_SIZE_AND_BORDER,
            backgroundPositionY: IMAGE_Y_SIZE_AND_BORDER,
            position: ABSOLUTE,
            top: 0,
            left: BORDER_AND_WIDTH,
          }}
        />
      </div>
    </div>
  )
}

export default React9Slice
