export default {
  API_ROOT: "https://localhost:5001",
  BANNERS: [
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2201-1637815646?w=266&type=o",
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2206-1637828227?w=266&type=o",
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2211-1637830694?w=266&type=o",
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-1804-1621311479?w=266&type=o",
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2183-1637392406?w=266&type=o",
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2226-1638429741?w=266&type=o",
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-1845-1622537721?w=266&type=o",
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-1955-1623938524?w=266&type=o",
    "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-1957-1623993489?w=266&type=o",
  ],
  SLICK_SETTINGS: {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  },
  CATEGORIES: [
    { code: "all", displayName: "Tất cả", color: "" },
    { code: "food", displayName: "Đồ ăn", color: "" },
    { code: "beverage", displayName: "Đồ uống", color: "" },
    { code: "vegan", displayName: "Đồ chay", color: "" },
    { code: "bakery", displayName: "Bánh kem", color: "" },
    { code: "noodles", displayName: "Mỳ", color: "" },
    { code: "fast-food", displayName: "Đồ ăn nhanh", color: "" },
  ],
  BRANDS: [
    "https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/brand3.svg",
    "https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/brand4.svg",
    "https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/brand5.svg",
    "https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/brand6.svg",
    "https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/brand2.svg",
  ],
  ORDER_STATUS: [
    { text: "Đang lấy hàng", color: "#233E8B" },
    { text: "Đang vận chuyển", color: "#FF7800" },
    { text: "Đã giao", color: "#66DE93" },
  ],

  TABLE_HEAD_CUSTOMER: [
    { id: "id", label: "Mã khách hàng", alignRight: false },
    { id: "avatar", label: "Ảnh đại diện", alignRight: false },
    { id: "name", label: "Tên khách hàng", alignRight: false },
    { id: "email", label: "Email", alignRight: false },
    { id: "bio", label: "Tự bạch", alignRight: false },
    { id: "gender", label: "Giới tính", alignRight: false },
    { id: "birthday", label: "Ngày sinh", alignRight: false },
    { id: "right", label: "Phân quyền", alignRight: false },
    { id: "", label: "", alignRight: false },
  ],

  TABLE_HEAD_PRODUCT: [
    { id: "id", label: "Mã sản phẩm", alignRight: false },
    { id: "thumbUrl", label: "", alignRight: false },
    { id: "name", label: "Tên sản phẩm", alignRight: false },
    { id: "unitPrice", label: "Đơn giá(đ)", alignRight: false },
    { id: "quantity", label: "Số lượng", alignRight: false },
    { id: "discount", label: "Khuyến mãi(%)", alignRight: false },
    { id: "category", label: "Loại", alignRight: false },
    { id: "", label: "", alignRight: false },
  ],

  TABLE_HEAD_TRANSACTION: [
    { id: "id", label: "Mã đơn hàng", alignRight: false },
    { id: "date", label: "Ngày đặt hàng", alignRight: false },
    { id: "totalAmount", label: "Tổng tiền", alignRight: false },
    { id: "shippingAddress", label: "Địa chỉ giao hàng", alignRight: false },
    { id: "paymentMethod", label: "Phương thức thanh toán", alignRight: false },
    { id: "", label: "", alignRight: false },
  ],
};
