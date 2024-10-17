function TampilkanData ()  {
    document.getElementById('profileSection').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';

    document.getElementById('name').value = document.getElementById('displayName').innerText;
    document.getElementById('role').value = document.getElementById('displayRole').innerText;
    document.getElementById('availability').value = document.getElementById('displayAvailability').innerText;
    document.getElementById('age').value = document.getElementById('displayAge').innerText;
    document.getElementById('location').value = document.getElementById('displayLocation').innerText;
    document.getElementById('experience').value = document.getElementById('displayExperience').innerText;
    document.getElementById('email').value = document.getElementById('displayEmail').innerText;
}

function hideForm() {
    document.getElementById('editForm').style.display = 'none';
    document.getElementById('profileSection').style.display = 'flex';
}

document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const availability = document.getElementById('availability').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;

    document.getElementById('displayName').innerText = name;
    document.getElementById('displayRole').innerText = role;
    document.getElementById('displayAvailability').innerText = availability;
    document.getElementById('displayAge').innerText = age;
    document.getElementById('displayLocation').innerText = location;
    document.getElementById('displayExperience').innerText = experience;
    document.getElementById('displayEmail').innerText = email;
    
    hideForm();
});