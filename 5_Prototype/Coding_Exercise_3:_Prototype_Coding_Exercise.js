class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
}

class Line
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
  }

  deepCopy()
  {
    let newStart = new Point(this.start.x, this.start.y);
    let newEnd = new Point(this.end.x, this.end.y);
    return new Line(newStart, newEnd);
  }
}