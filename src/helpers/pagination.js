export function VssPagedArray (array, currentPage, itemsPerPage) {
  return array.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage);
}