import logo from './logo.svg';
import './App.css';
import './index';

function App() {
  return (
    <div class="container mx-auto">
    <div class="max-w-md mx-2 my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://narmadi.com/id/wp-content/uploads/2020/06/gambar-mewarnai-pemandangan-672x336.webp" alt="Modern building architecture">
          </img>
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accomodation for your team</a>
          <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
