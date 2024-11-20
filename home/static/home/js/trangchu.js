document.addEventListener('DOMContentLoaded', function(){
    // Sidebar toggle
    // const btnsider = document.getElementById('btn-sidebar');
    // const sidebar = document.getElementById('sidebar');
    // let sbopen = false;
    // btnsider.addEventListener('click', () => {
    //     if(sbopen){
    //         sidebar.style.left = '-300px';
    //         sbopen = false;
    //     }else{
    //         sidebar.style.left = '0';
    //         sbopen = true;
    //     }
    // });

  
    const subMenus = document.querySelectorAll('.item > li > a');
    subMenus.forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.preventDefault();
            const subMenu = menu.nextElementSibling;
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none';
            } else {
                subMenu.style.display = 'block';
            }
        });
    });
    
});
//ttnv
function openEmployeeMenuttnv() {
    const nvulLink = document.getElementById('nvul');
    const employeeSubmenu = nvulLink.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/thongtinnhanvien.html') {
      openEmployeeMenuttnv();
    }
  });   
//lnv
function openEmployeeMenulnv() {
    const nvulLink = document.getElementById('nvul');
    const employeeSubmenu = nvulLink.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/luongnhanvien.html') {
      openEmployeeMenulnv();
    }
  });   
//scl
function openEmployeeMenuscl() {
    const nvulLink = document.getElementById('nvul');
    const employeeSubmenu = nvulLink.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/socalam.html') {
      openEmployeeMenuscl();
    }
  });   
//lnp
function openEmployeeMenulnp() {
    const nvulLink = document.getElementById('nvul');
    const employeeSubmenu = nvulLink.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/nghiphep.html') {
      openEmployeeMenulnp();
    }
  });   

//dc
function openEmployeeMenudc() {
    const tbul = document.getElementById('tbul');
    const employeeSubmenu = tbul.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/dungcu.html') {
      openEmployeeMenudc();
    }
  });   
//tb
function openEmployeeMenutb() {
    const tbul = document.getElementById('tbul');
    const employeeSubmenu = tbul.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/thietbi.html') {
      openEmployeeMenutb();
    }
  });   

//bt
function openEmployeeMenubt() {
    const tbul = document.getElementById('tbul');
    const employeeSubmenu = tbul.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/baotri.html') {
      openEmployeeMenubt();
    }
  });   
function navigateTo(path) {
    window.location.href = `http://127.0.0.1:8000${path}`;
}
//ttnl
function openEmployeeMenuttnl() {
    const nvulLink = document.getElementById('nlul');
    const employeeSubmenu = nvulLink.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/thongtinnguyenlieu.html') {
      openEmployeeMenuttnl();
    }
  });   

//knl
function openEmployeeMenuknl() {
    const nvulLink = document.getElementById('nlul');
    const employeeSubmenu = nvulLink.nextElementSibling;
    employeeSubmenu.style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/khonguyenlieu.html') {
      openEmployeeMenuknl();
    }
  });   

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.createElement('div');
    overlay.classList.add('sidebar-overlay');
    
    sidebar.classList.toggle('show');
    
    
}