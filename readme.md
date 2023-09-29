## Directive

Trong Vue.js, Directive là một loại cú pháp đặc biệt được sử dụng trong các template của Vue để áp dụng các logic và thao tác trực tiếp lên DOM (Document Object Model). Directive được bao gồm bởi tiền tố v-, và chúng định nghĩa các hành vi cụ thể cho các phần tử HTML.

Dưới đây là một số ví dụ về các directive trong Vue.js và cách chúng hoạt động:

- **v-once**: Directive v-once được sử dụng để render một phần tử hoặc một khối HTML chỉ một lần và không cập nhật lại nó sau đó

- **v-bind**: Directive v-bind (hoặc viết tắt là :) được sử dụng để ràng buộc giá trị của một thuộc tính HTML với một biến trong Vue instance. Ví dụ, v-bind:src ràng buộc thuộc tính src của một thẻ img với một biến imageUrl.
- **v-on**: Directive v-on (hoặc viết tắt là @) được sử dụng để lắng nghe sự kiện DOM và kích hoạt một hàm hoặc phương thức Vue khi sự kiện đó xảy ra.
- **v-model**: Directive v-model được sử dụng để tạo một liên kết hai chiều giữa một trường nhập liệu và một biến trong Vue instance. Khi giá trị của trường nhập liệu thay đổi, biến trong Vue instance cũng thay đổi và ngược lại.
