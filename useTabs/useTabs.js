export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItems: allTabs[currentIndex],
      changeItems: setCurrentIndex
    };
  };