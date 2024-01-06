
<script>
    
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const page = this.getAttribute('href');
            
            window.location.href = page;
        });
    });
</script>
