/** Active slide index by whichever card center is closest to the scroller viewport center. */
export function getCenteredCarouselIndex(scroller: HTMLElement): number {
  const items = Array.from(scroller.children) as HTMLElement[];
  if (items.length === 0)
    return 0;

  const viewportCenter = scroller.scrollLeft + scroller.clientWidth / 2;
  let bestIndex = 0;
  let bestDist = Infinity;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemCenter = item.offsetLeft + item.clientWidth / 2;
    const dist = Math.abs(viewportCenter - itemCenter);
    if (dist < bestDist) {
      bestDist = dist;
      bestIndex = i;
    }
  }

  return bestIndex;
}
