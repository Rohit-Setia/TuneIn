// var MyClass = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
//         <link rel="stylesheet" as="style" onload="this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Spline+Sans%3Awght%40400%3B500%3B700" />
//         <title>Stitch Design</title>
//         <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
//         <div className="relative flex size-full min-h-screen flex-col bg-[#141f18] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}>
//           <div className="layout-container flex h-full grow flex-col">
//             <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2a4133] px-10 py-3">
//               <div className="flex items-center gap-4 text-white">
//                 <div className="size-4">
//                   <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" /></svg>
//                 </div>
//                 <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">TuneIn</h2>
//               </div>
//               <div className="flex flex-1 justify-end gap-8">
//                 <div className="flex items-center gap-9">
//                   <a className="text-white text-sm font-medium leading-normal" href="#">Home</a>
//                   <a className="text-white text-sm font-medium leading-normal" href="#">About</a>
//                   <a className="text-white text-sm font-medium leading-normal" href="#">Contact</a>
//                 </div>
//                 <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#94e0b2] text-[#141f18] text-sm font-bold leading-normal tracking-[0.015em]">
//                   <span className="truncate">Log In</span>
//                 </button>
//               </div>
//             </header>
//             <div className="px-40 flex flex-1 justify-center py-5">
//               <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
//                 <div className="@container">
//                   <div className="@[480px]:p-4">
//                     <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJNQ90z2LLkYEItP1ozOG3NIdqPEW5FN0D-AdAEF99FFU2NieANNleNGfJHXjQQk0ZtRhHXn2fwNpAIoSwNerFmeRMeNIMsSDg1fdzUAnBTO09uzlbuSvZj4LMy4xA0K_nTckXu0ohC8Bhi7tCrsKjK37Pv7FfHiIQs9TPEl8W-m227Ce8tlndl2WE22uh9jgtaLmyNRHB2MONym0Z71t2_IPZ0zWuEAgCIY3fljZz_gUGknxcniEvgkzC9U0UVUULhwdmOrgjdz0")'}}>
//                       <div className="flex flex-col gap-2 text-center">
//                         <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
//                           Discover Music That Matches Your Mood
//                         </h1>
//                         <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
//                           TuneIn analyzes your mood, whether expressed through text or a selfie, and recommends the perfect music from Spotify to match your emotions.
//                         </h2>
//                       </div>
//                       <div className="flex-wrap gap-3 flex justify-center">
//                         <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#94e0b2] text-[#141f18] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
//                           <span className="truncate">Type your mood</span>
//                         </button>
//                         <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2a4133] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
//                           <span className="truncate">Upload a selfie</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <footer className="flex justify-center">
//               <div className="flex max-w-[960px] flex-1 flex-col">
//                 <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
//                   <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
//                     <a className="text-[#9bbfaa] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
//                     <a className="text-[#9bbfaa] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
//                     <a className="text-[#9bbfaa] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
//                   </div>
//                   <p className="text-[#9bbfaa] text-base font-normal leading-normal">@2024 TuneIn. All rights reserved.</p>
//                 </footer>
//               </div>
//             </footer>
//           </div>
//         </div>
//       </div>
//     );
//   }
// });