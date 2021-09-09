import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/Rimsra.jpg"></img>
            <span className='font-semibold text-lg'>Phumiphat Srikrachang 630610750</span>
          </div>

          {/* status message */}
          <p>"ครับ สำหรับท่านที่เดินผ่านไปผ่านมา วันนี้เฉาก๊วยชากังราวได้มาบริการท่านพ่อแม่พี่น้องกันอีกแล้วนะครับ อากาศร้อนๆอย่างนี้นะครับ เฉาก๊วยสักถ้วยชื่นใจ แม้อากาศไม่ร้อนก็ทานกันได้นะครับ เฉาก๊วยชากังราวนั้นทานได้ทุกฤดูกาลนะครับ นอกจากเฉาก๊วยชากังราวจะอร่อยแล้ว ก็ยังมีประโยชน์ต่อร่างกายอีกมากมาย เช่น แก้ร้อนใน แก้ไข้หวัด ลดความดันโลหิตสูง แก้กล้ามเนื้ออักเสบ ข้ออักเสบ ตับอักเสบ แล้วก็เบาหวาน และสำหรับท่านที่ไม่เคยเห็นต้นเฉาก๊วย วันนี้โอกาสดีนะครับ เรามีต้นเฉาก๊วยมาให้พ่อแม่พี่น้องได้ดูได้ชมกันด้วยนะครับ โอกาศหน้าอย่าลืมนะครับ เฉาก๊วยชากังราวแท้ๆที่เราทำจากยางเฉาก๊วยจริงๆนะครับ"</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>112 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">Lisa</p>
              <p>ตัวอย่าง Template จ้า</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>999 คน</p>
              </div>
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">หมาน้อย</p>
              <p>เม้นค้าบ</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
