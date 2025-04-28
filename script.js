function filterJobs() {
     const searchInput = document.getElementById('searchInput').value.toLowerCase();
     const filterSelect = document.getElementById('filterSelect').value;
     const jobContainer = document.getElementById('jobContainer');
     const cards = jobContainer.getElementsByClassName('card');

     for (let card of cards) {
          const title = card.getAttribute('data-title').toLowerCase();
          const matchesSearch = title.includes(searchInput);
          const matchesFilter = !filterSelect || title === filterSelect.toLowerCase();

          if (matchesSearch && matchesFilter) {
               card.style.display = '';
          } else {
               card.style.display = 'none';
          }
     }
}    

function showDetails(jobTitle) {
     alert(`Siz ${jobTitle} vakansiyasına baxırsınız.`);
}