// @ts-check

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.size = new Size();
    this.position = new Position();
    this.screenSize = new Size(800, 600);
  }

  resize(newSize) {
    const checkDistanceX = this.screenSize.width - this.position.x;
    const checkDistanceY = this.screenSize.height - this.position.y;
    const calculateNewSizeWidth =
      checkDistanceX < newSize.width ? checkDistanceX : newSize.width;
    const calculateNewSizeHeight =
      checkDistanceY < newSize.height ? checkDistanceY : newSize.height;
    this.size.width = newSize.width > 1 ? calculateNewSizeWidth : 1;
    this.size.height = newSize.height > 1 ? calculateNewSizeHeight : 1;
  }

  move(newPosition) {
    const calculateNewPositionForX =
      this.screenSize.width - newPosition.x < this.size.width
        ? this.screenSize.width - this.size.width
        : newPosition.x;
    const calculateNewPositionForY =
      this.screenSize.height - newPosition.y < this.size.height
        ? this.screenSize.height - this.size.height
        : newPosition.y;
    this.position.x = newPosition.x > 1 ? calculateNewPositionForX : 0;
    this.position.y = newPosition.y > 1 ? calculateNewPositionForY : 0;
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  programWindow.resize(newSize);
  const newPosition = new Position(100, 150);
  programWindow.move(newPosition);
  return programWindow;
}
