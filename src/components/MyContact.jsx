import React from 'react';

function MyContact() {
  return (
    <footer className="bg-emerald-500 text-white text-xl ">
      <section
        id="contact"
        className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:items-start justify-between "
      >
        <div className=" text-sm md:text-xl">
          <p className="">Contact me through the following methods: </p>
          <div className=" flex whitespace-nowrap">
            <a href="mailto:kelvnguye@gmail.com">
              <i className="fas fa-envelope "></i> kelvnguye@gmail.com
            </a>
          </div>
          <div className=" flex whitespace-nowrap">
            <a href="https://www.facebook.com/locnguyen7501/" target="_blank">
              <i className="fab fa-facebook-messenger"></i> Lộc Nguyễn
            </a>
          </div>
          <div className=" flex whitespace-nowrap">
            <a href="tel:+84582535048">
              <i className="fas fa-phone"></i> +84582 535 048
            </a>
          </div>
        </div>

        <nav class="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="#home" class="hover:opacity-90">
            About me
          </a>
          <a href="#myKnowlegde" class="hover:opacity-90">
            My Knowlegde
          </a>
          <a href="#myProject" class="hover:opacity-90">
            My Project
          </a>
          <a href="#myHobby" class="hover:opacity-90">
            My Hobby
          </a>
        </nav>
        <div class="flex flex-col text-sm md:text-xl md:gap-2">
          <p class="text-right">
            Copyright &copy; <span id="year">2024</span>
          </p>
          <p class="text-right">All Right Reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default MyContact;
