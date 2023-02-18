const goToNextPageButton = (
  totalPageButtons,
  currentPageButton,
  updateButtonFunction
) => {
  const nextPageButton = currentPageButton + 1;

  const adjustedPageButton = Math.min(nextPageButton, totalPageButtons);

  updateButtonFunction(adjustedPageButton);
};

const updateHistoryForward = (totalPageButtons, currentPageButton, update) => {
  const nextPageButton = currentPageButton + 1;

  const adjustedPageButton = Math.min(nextPageButton, totalPageButtons);

  update(`/${adjustedPageButton}`);
};

const goToPreviousPageButton = (currentPageButton, updateButtonFunction) => {
  const previousPageButton = currentPageButton - 1;

  const adjustedPageButton = Math.max(1, previousPageButton);

  updateButtonFunction(adjustedPageButton);
};

const updateHistoryBackward = (currentPageButton, update) => {
  const previousPageButton = currentPageButton - 1;

  const adjustedPageButton = Math.max(1, previousPageButton);

  update(`/${adjustedPageButton}`);
};

const goToPageButton = (totalPageButtons, pageNumber, updateButtonFunction) => {
  if (pageNumber >= 1 && pageNumber <= totalPageButtons) {
    updateButtonFunction(pageNumber);
  }
};

const updateHistorySpecific = (totalPageButtons, pageNumber, update) => {
  if (pageNumber <= 1) {
    update(`/`);
  }

  if (pageNumber <= totalPageButtons) {
    update(`/${pageNumber}`);
  }
};

//will return an array of the job posts we should show based on our dataLimit and the current
// page we are on.
const getPaginatedData = (data, currentPageButton, dataLimit) => {
  const firstItemIndex = currentPageButton * dataLimit - (dataLimit - 1) - 1;

  let lastItemIndex = currentPageButton * dataLimit - 1;

  if (lastItemIndex >= data.length) {
    lastItemIndex = data.length - 1;
  }

  const results = [];

  for (let i = firstItemIndex; i <= lastItemIndex; i++) {
    const jobPost = data[i];

    results.push(jobPost);
  }

  return results;
};

//returns an array of the min and max numbers of our buttonsRange, so we can display them.
//i only want this function to take effect after page button 3
//for example if buttons range is 5 and there are 13 total buttons, initially if we're on
// pages 1-3, buttons 1-5 are displayed. When we click 4, we should move 1 button up and see
// 2,3,4,5,6. When we click 5, we should move 2 buttons up and display  3 4 5 6 7 etc
const getPaginatedPagesRange = (totalPageButtons, buttonsRange, pageButton) => {
  //get initial min and max button values we want to display. We will start from 1 as the min.
  const initialMinValue = 1;

  let initialMaxValue;

  if (totalPageButtons <= buttonsRange) {
    initialMaxValue = totalPageButtons;
  } else {
    initialMaxValue = buttonsRange;
  }

  //if we havent selected past the 3rd page button or if initialMaxValue is three, just return our initial ranges as they are
  if (pageButton <= 3 || initialMaxValue <= 3) {
    return getAllRangeNumbers([initialMinValue, initialMaxValue]);
  }

  //if initialMaxValue is greater than 3 and we select a page button greater than
  // 3, then we have to update our range
  if (initialMaxValue > 3 && pageButton > 3) {
    // find the new pageButton difference from 3
    const diff = pageButton - 3;

    let newMinValue = initialMinValue + diff;

    let newMaxValue = initialMaxValue + diff;

    // if newMaxValue exceeds or equals the total number of page buttons,then the newMaxValue should just equal the total number of page buttons.
    if (newMaxValue >= totalPageButtons) {
      newMaxValue = totalPageButtons;
    }

    //because the maxValue has possibly gotten smaller from previous step, we want to check
    //if we need to adjust our minValue to make sure we are showing the correct range of
    // buttons
    newMinValue = checkMinValue(
      newMinValue,
      newMaxValue,
      totalPageButtons,
      buttonsRange
    );

    return getAllRangeNumbers([newMinValue, newMaxValue]);
  }
};

//updates minValue in range
const checkMinValue = (
  startRange,
  endRange,
  totalPageButtons,
  buttonsRange
) => {
  //if the total number of page buttons is greater than our buttonsRange, this
  // means we will always be able to show the full range of buttons
  //so we  decrease our min value till we meet the range
  if (totalPageButtons >= buttonsRange) {
    while (endRange - startRange + 1 !== buttonsRange) {
      startRange = startRange - 1;
    }
    //if the total page buttons is less than our range, this means
    //our new range is the total page buttons,so we  just want to decrease minValue
    // until we've met this range
  } else {
    while (endRange - startRange + 1 !== totalPageButtons) {
      startRange = startRange - 1;
    }
  }

  return startRange;
};

//takes in an array of min and max values in a range
//returns an array of all numbers in that range
const getAllRangeNumbers = (range) => {
  let result = [];

  let start = range[0];

  let end = range[1];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};

export {
  goToNextPageButton,
  goToPreviousPageButton,
  goToPageButton,
  getPaginatedData,
  getPaginatedPagesRange,
  updateHistoryForward,
  updateHistoryBackward,
  updateHistorySpecific,
};
