1. Hãy nêu các bước viết unit test

- Xác định tất cả các trường hợp có thể xảy ra

- Chỉ định các tham số và kết quả mong đợi cho từng trường hợp

- viết Unit test

- Chạy lệnh kiểm tra các Unit test đã viết

- Xem kết quả trả về và đánh giá kết quả

2. Các thành phần cơ bản có trong 1 unit test:

- Test suit

- Block test

- Test case

- Action

- Assert

3. Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không?

- Nhập mảng rỗng: [], kết quả mong muốn false

- Nhập mảng 1 phần tử: [1], kết quả mong muốn false

- Nhập mảng chứa các kí tự string: ['a', 'b'], kết quả mong muốn false

- Mảng chứa giá trị null vs undefined: [null, nul, undefined, null, undefined, null], kết quả mong muốn false

- Nhập mảng mà các phần tử có giá trị giống nhau: [1, 1, 1, 1], kết quả mong muốn false

- Nhập mảng mà các phần tử có giá trị bất kì: [5, 10, 20, 1], kết quả mong muốn false

- Nhập mảng mà các phần tử có giá trị giảm dần: [10, 9, 8, 7], kết quả mong muốn false

- Nhập mảng mà các phần tử có giá trị tăng dần, nhưng có phần tử giống nhau: [1, 2, 2, 4], kết quả mong muốn true

- Nhập mảng mà các phần tử có giá trị tăng dần: [1, 2, 3, 4], kết quả mong muốn true
