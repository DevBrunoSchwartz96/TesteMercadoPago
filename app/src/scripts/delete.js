function deleteMeta(codven) {
    if (confirm('Deseja deletar linha?')) {
      fetch(`/delete-meta/${codven}`, {
        method: 'POST',
      })
      .then(response => {
        if (response.ok) {
          // Reload the page to see the updated list after deletion
          window.location.reload();
        } else {
          alert('Falha ao deletar.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }