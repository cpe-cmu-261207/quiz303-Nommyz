import React from 'react';
import logo from './logo.svg';
import './App.css';
import { comments, CommentType } from './data/comments';

function Fbpost() {
  const Repiles = (repiles: CommentType[]) => {
    return (repiles.map(n =>
      <div className="flex p-2 items-start space-x-2 pl-14">
        <img className="w-10 w-10 rounded-full" src={n.userImagePath}></img>
        <div className="bg-white rounded-lg p-2">
          <p className="font-semibold">{n.username}</p>
          <p>{n.commentText}</p>
          {n.likeNum > 0 ?
            <div className='flex items-center'>
              <img className='w-4 h-4 mr-1' src='/like.svg'></img>
              <p className='text-gray-500'>{n.likeNum}</p>
            </div> : null}
        </div>
      </div>
    ))
  }
return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/Rimsra.jpg"></img>
            <span className='font-semibold text-lg' >Phumiphat Srikrachang 630610750</span>
          </div>

          {/* status message */}
          <p>"ครับ สำหรับท่านที่เดินผ่านไปผ่านมา วันนี้เฉาก๊วยชากังราวได้มาบริการท่านพ่อแม่พี่น้องกันอีกแล้วนะครับ อากาศร้อนๆอย่างนี้นะครับ เฉาก๊วยสักถ้วยชื่นใจ แม้อากาศไม่ร้อนก็ทานกันได้นะครับ เฉาก๊วยชากังราวนั้นทานได้ทุกฤดูกาลนะครับ นอกจากเฉาก๊วยชากังราวจะอร่อยแล้ว ก็ยังมีประโยชน์ต่อร่างกายอีกมากมาย เช่น แก้ร้อนใน แก้ไข้หวัด ลดความดันโลหิตสูง แก้กล้ามเนื้ออักเสบ ข้ออักเสบ ตับอักเสบ แล้วก็เบาหวาน และสำหรับท่านที่ไม่เคยเห็นต้นเฉาก๊วย วันนี้โอกาสดีนะครับ เรามีต้นเฉาก๊วยมาให้พ่อแม่พี่น้องได้ดูได้ชมกันด้วยนะครับ โอกาศหน้าอย่าลืมนะครับ เฉาก๊วยชากังราวแท้ๆที่เราทำจากยางเฉาก๊วยจริงๆนะครับ"</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>100 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">
          {comments.map(m =>
            <div>
              <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={m.userImagePath}></img>
                <div className="bg-white rounded-lg p-2">
                  <p className="font-semibold">{m.username}</p>
                  <p>{m.commentText}</p>
                  {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                  {m.likeNum > 0 ?
                    <div className='flex items-center'>
                      <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                      <p className='text-gray-500'>{m.likeNum}</p>
                    </div> : null}
                </div>
              </div>
              {Repiles(m.replies)}
            </div>
          )}



        </div>

      </div>
    </div>
  );
}
export default Fbpost;
