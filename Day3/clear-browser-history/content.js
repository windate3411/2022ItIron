const button = document.querySelector(".btn");
const timeRangeSelect = document.querySelector("#timeRange");

const deleteHistory = (timeRange) => {
  // 優先處理delete all的情況
  if (timeRange === "all") return chrome.history.deleteAll();

  // deleteRange函數需要傳入一個含有endTime & startTime的物件，而時間需要以毫秒(milliseconds)表示epoch time
  return chrome.history.deleteRange({
    endTime: Date.now(),
    startTime: Date.now() - Number(timeRange) * 60 * 60 * 1000,
  });
};

button.addEventListener("click", () => {
  deleteHistory(timeRangeSelect.value);
  window.close();
});
