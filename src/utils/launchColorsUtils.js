export const handleMouseEnter = (color, setTooltip) => {
  setTooltip((prev) => ({
    ...prev,
    show: true,
    color: color.name,
    hex: color.hex,
  }));
};

export const handleMouseMove = (event, setTooltip) => {
  setTooltip((prev) => ({
    ...prev,
    x: event.clientX + 10,
    y: event.clientY + 10,
  }));
};

export const handleMouseLeave = (setTooltip) => {
  setTooltip({ show: false, color: "", hex: "", x: 0, y: 0 });
};
