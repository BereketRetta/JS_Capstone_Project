const contact = document.querySelector('.contact');
const main = document.querySelector('main');

contact.addEventListener('click', () => {
main.innerHTML = ` <div class="text-content">
<p>
    Do you have any question or you just want to say "Hello"?<br>
    You can reach out to us!
</p>
<ul>
    <li>Our e-mail mail@mail.com</li>
    <li>Our phone number 0043586534422</li>
    <li>Our address Streetname 22, 84503 City, Country</li>
</ul>
</div>`;
});