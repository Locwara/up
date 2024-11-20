document.addEventListener('DOMContentLoaded', () =>{
    const btnntt = document.getElementById('tcl');
    const btndong = document.getElementById('dong');
    const form = document.getElementById('form_luong_ntt');
    let form_open = false;

    btnntt.addEventListener('click', () =>{
        if(!form_open){
            form.style.display = 'block';
            form_open = true;
        }else{
            form.style.display = 'none';
            form_open = false;
        }
    });

    btndong.addEventListener('click', () =>{
        form.style.display = 'none';
        form_open = false;
    });
    const btnimport = document.getElementById('import');
    const btndongimport = document.getElementById('dongimport');
    const form_import = document.getElementById('form_import_bangluong');
    let form_import_open = false;

    btnimport.addEventListener('click', () =>{
        if(!form_import_open){
            form_import.style.display = 'block';
            form_import_open = true;
        }else{
            form_import.style.display = 'none';
            form_import_open = false;
        }
    });

    btndongimport.addEventListener('click', () =>{
        form_import.style.display = 'none';
        form_import_open = false;
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const alerts = document.querySelectorAll('.alert')
    alerts.forEach(function(alert){
        setTimeout(function(){
            alert.style.display = 'none'
        }, 5000)
    })
    const dong = document.querySelectorAll('.close-btn')
    dong.forEach(function(btn){
        btn.addEventListener('click', function(){
            this.parentElement.style.display = 'none'
        })
    })
})
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const deleteButtons = document.querySelectorAll('.nut-xoa');
    const cancelButtons = document.querySelectorAll('.nut-huy');


    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const form = document.getElementById(`form-xoa-${id}`);
            
     
            document.querySelectorAll('.xoa-form').forEach(f => {
                if (f !== form) {
                    f.style.display = 'none';
                }
            });

      
            form.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const form = document.getElementById(`form-xoa-${id}`);
            form.style.display = 'none';
            overlay.style.display = 'none';
        });
    });


    overlay.addEventListener('click', function() {
        document.querySelectorAll('.xoa-form').forEach(form => {
            form.style.display = 'none';
        });
        overlay.style.display = 'none';
    });

    const nutSua = document.querySelectorAll('.sua');
    const popup = document.getElementById('form_luong_sua');
    const closeBtn = document.querySelector('.dongsua');

    nutSua.forEach(button => {
        button.addEventListener('click', function() {
            const maluong = this.getAttribute('data-id');
    
            const thangluong = this.getAttribute('data-thangluong');
            const luongcoban = this.getAttribute('data-luongcoban');
            const tongluong = this.getAttribute('data-tongluong');
     
            let formattedDate = '';
            if (thangluong) {
                const date = new Date(thangluong);
                if (!isNaN(date.getTime())) { 
                    formattedDate = date.toISOString().split('T')[0];
                }
            }

            document.getElementById('maluong').value = maluong;
            document.getElementById('thangluong').value = formattedDate;
            document.getElementById('luongcoban').value = luongcoban;
            
            const form = document.getElementById('form_sua');
            form.action = `/sua_bangluong/${maluong}/`;
            popup.style.display = 'block';
        });
    });


    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });


    window.addEventListener('click', function(e) {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });


    const formSua = document.getElementById('form_sua');
    formSua.addEventListener('submit', function(e) {
        console.log('Form values before submit:');
        console.log('thangluong:', document.getElementById('thangluong').value);
        console.log('sogio:', document.getElementById('sogio').value);
        console.log('luongcoban:', document.getElementById('luongcoban').value);
    });
});