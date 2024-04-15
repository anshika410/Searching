const suggestionsMap = {
    "Programming Languages": ['C', 'C++', 'Python', 'JavaScript', 'DSA'],
    "Diseases": ['Viral Flu', 'Fever', 'Typhoid', 'Common Cold'],
    "Electronic Devices": ['Camera', 'Phone', 'Headphones', 'Laptop'],
    "Dresses": ['Shirt', 'Trousers', 'Dress', 'Skirt', 'Blouse']
  };

  let selectedOptions = [];

  const searchInput = document.getElementById('search');
  const sugCon = document.getElementById('suggestions');
  const selOpsCon = document.getElementById('selected-options');

  function showSuggestions() {
    const searchText = searchInput.value.toLowerCase();
    sugCon.innerHTML = '';
    if (searchText.length > 0) {
      Object.keys(suggestionsMap).forEach(category => {
        suggestionsMap[category].forEach(option => {
          if (option.toLowerCase().includes(searchText) && !selectedOptions.includes(option)) {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = option;
            suggestionElement.addEventListener('click', () => {
              selectOption(option);
            });
            sugCon.appendChild(suggestionElement);
          }
        });
      });
      sugCon.style.display = 'block';
    } else {
      sugCon.style.display = 'none';
    }
  }
  function renderSelectedOptions() {
    selOpsCon.innerHTML = '';
    selectedOptions.forEach(option => {
      const optionElement = document.createElement('div');
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => {
        removeOption(option);
      });
      selOpsCon.appendChild(optionElement);
    });
  }
  function selectOption(option) {
    selectedOptions.push(option);
    renderSelectedOptions();
    showSuggestions();
  }

  function removeOption(option) {
    const index = selectedOptions.indexOf(option);
    if (index !== -1) {
      selectedOptions.splice(index, 1);
      renderSelectedOptions();
      showSuggestions();
    }
  }

  searchInput.addEventListener('input', showSuggestions);

  showSuggestions();
