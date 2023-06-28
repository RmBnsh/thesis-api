const ImageGrid = () => {
    const images = [      
      '/services/TEST1.jpg',
      '/services/obdcable.png',
      '/services/TEST2.jpg',
      '/services/obdiiserial.png',
      '/services/raspberryPi.jpg',
      '/services/TEST3.jpg',
      '/services/homescreen.png',
      '/services/phone.jpg',
      '/services/data1.png',
      '/services/data2.png',
      '/services/data3.png',
      '/services/data4.png',
      
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageGrid;
  