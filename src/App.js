import logo from './logo.svg';
import './App.css';
import images from '../src/asset';
import SlideImages from './component/SlideImges';

function App() {
  return (
    <div className="App">
      <nav>
        <SlideImages />
      </nav>

      <header className="App-header">
        <div className='contents'>
            <div className='tag_name'>NỘI THẤT NẤM</div>
            <h2>Tôi là ĐỖ ĐĂNG BÌNH</h2>
            <p>- Nhận thiết kế và thi công nội thất miền bắc</p>
            <p>- Thiết kế và trọn gói căn trung cư, nhà phố và biệt thự theo yêu cầu</p>
            <p>- Báo giá nhanh sau 5 phút</p>
            <p>- Bảo hành lên đến 5 năm</p>
            <p>Hotline: 0877873673</p>
            <p>Địa chỉ: Hạ Bằng - Thạch Thất - Hà Nội</p>
        </div>
        <img src={images.avatar} className='imgAvata' />
      </header>

      <div className='show_result'>
      <img src={images.Ngu1} />
      <img src={images.Ngu2} />
      <img src={images.Ngu3} />
      <img src={images.Ngu4} />
      <img src={images.Bep1} />
      <img src={images.Bep2} />
      <img src={images.Bep3} />
      <img src={images.Khach2} />
      <img src={images.Khach3} />
      </div>
    </div>
  );
}

export default App;
