const quizs = [
    {
      id: 1,
      title: "Kiểm tra mạng máy tính",
      time: 600,
      Point: 500,
      ratings: 3,
      type: 'difficult',
      questions: [
        {
          id: 1,
          question: "Câu 1: Nguyên nhân cơ bản nào dẫn đến sự  ra đời của mạng máy tính",
          answer:[
            {id: 1, 
              ans: "A. Nhu cầu trao đổi thông tin ngày càng tăng",
            },
            {id: 2, 
              ans: "B. Khối lượng thông tin lưu trên máy tính ngày càng tăng",
            },
            {id: 3, 
              ans: "C. Khoa học và công nghệ về lĩnh vực máy tính và truyền thông phát triển",
            },
            {id: 4, 
              ans: "D. Cả ba câu trên đúng",
            }
          ],
          correct: {
            id: 4,
          }, 
        },
        {
            id: 2,
            question: "Câu 2: Ý nghĩa cơ bản nhất của mạng máy tính là gì?",
            answer:[
              {id: 1, 
                ans: "A. Nâng cao độ tin cậy của hệ thống máy tính",
              },
              {id: 2, 
                ans: "B. Trao đổi và chia sẻ thông tin",
              },
              {id: 3, 
                ans: "C. Phát triển ứng dụng trên máy tính ",
              },
              {id: 4, 
                ans: "D. Nâng cao chất lượng khai thác thông tin",
              }
            ],
            correct: {
              id: 2,
            }, 
          },
          {
            id: 3,
            question: "Câu 3: Thuật ngữ viết tắt bằng tiếng Anh của mạng cục bộ là gì?",
            answer:[
              {id: 1, 
                ans: "A. LAN (Local Area Network)",
              },
              {id: 2, 
                ans: "B. MAN (Metropolitan Area Network)",
              },
              {id: 3, 
                ans: "C. WAN (Wide Area Network)",
              },
              {id: 4, 
                ans: "D. GAN (Global Area Network)",
              }
            ],
            correct: {
              id: 1,
            }, 
          },
          {
            id: 4,
            question: "Câu 4:Thuật ngữ viết tắt bằng tiếng Anh của mạng diện rộng là gì?",
            answer:[
              {id: 1, 
                ans: "A. LAN (Local Area Network)",
              },
              {id: 2, 
                ans: "B. MAN (Metropolitan Area Network)",
              },
              {id: 3, 
                ans: "C. WAN (Wide Area Network)",
              },
              {id: 4, 
                ans: "D. GAN (Global Area Network)",
              }
            ],
            correct: {
              id: 3,
            }, 
          },
          {
            id: 5,
            question: "Cấu 5. Thuật ngữ viết tắt bằng tiếng Anh của mạngthành phố là gì?",
            answer:[
              {id: 1, 
                ans: "A. LAN (Local Area Network)",
              },
              {id: 2, 
                ans: "B. MAN (Metropolitan Area Network)",
              },
              {id: 3, 
                ans: "C. WAN (Wide Area Network)",
              },
              {id: 4, 
                ans: "D. GAN (Global Area Network)",
              }
            ],
            correct: {
              id: 2,
            },
          }, {
            id: 6,
            question: "Cấu 6. Thuật ngữ viết tắt bằng tiếng Anh của mạngtoàn cục là gì?",
            answer:[
              {id: 1, 
                ans: "A. LAN (Local Area Network)",
              },
              {id: 2, 
                ans: "B. MAN (Metropolitan Area Network)",
              },
              {id: 3, 
                ans: "C. WAN (Wide Area Network)",
              },
              {id: 4, 
                ans: "D. GAN (Global Area Network)",
              }
            ],
            correct: {
              id: 4,
            },
          }, {
            id: 7,
            question: "Cấu 7. Thuật ngữ LAN (mạng cục bộ) là viết tắt của cụm từ nào?",
            answer:[
              {id: 1, 
                ans: "A. Local Access Network",
              },
              {id: 2, 
                ans: "B. Local Access Networking",
              },
              {id: 3, 
                ans: "C. Local Area Network",
              },
              {id: 4, 
                ans: "D. Local Area Networking",
              }
            ],
            correct: {
              id: 3,
            },
          }, {
            id: 8,
            question: "Cấu 8. Thuật ngữ WAN (mạng diện rộng) là viết tắt của cụm từ nào?",
            answer:[
              {id: 1, 
                ans: "A. Wide Access Network",
              },
              {id: 2, 
                ans: "B. Wide Access Networking",
              },
              {id: 3, 
                ans: "C. Wide Area Networking",
              },
              {id: 4, 
                ans: "D. Wide Area Network",
              }
            ],
            correct: {
              id: 4,
            },
          }, {
            id: 9,
            question: "Cấu 9. Thuật ngữ MAN (mạng thành phố) là viết tắt của cụm từ nào?",
            answer:[
              {id: 1, 
                ans: "A. Metropolitan Area Network",
              },
              {id: 2, 
                ans: "B. Metropolitan Area Networking",
              },
              {id: 3, 
                ans: "C. Metro Area Network",
              },
              {id: 4, 
                ans: "D. Metro Area Networking",
              }
            ],
            correct: {
              id: 1,
            },
          }, {
            id: 10,
            question: "Cấu 10. Thuật ngữ GAN (mạng toàn cục) là viết tắt của cụm từ nào?",
            answer:[
              {id: 1, 
                ans: "A. Global Access Network",
              },
              {id: 2, 
                ans: "B. Global Area Network",
              },
              {id: 3, 
                ans: "C. Global Access Networking",
              },
              {id: 4, 
                ans: "D. Global Area Networking",
              }
            ],
            correct: {
              id: 2,
            },
         
          }
      ],
    },
    {
        id: 2,
        title: "Kiểm tra JavaScript",
        time: 600,
        Point: 500,
        type: 'difficult',
        ratings: 4,
        questions: [
          {
            id: 1,
            question: "Câu 1: JavaScript là ngôn ngữ xử lý ở:",
            answer:[
              {id: 1, 
                ans: "A. Client",
              },
              {id: 2, 
                ans: "B. Server",
              },
              {id: 3, 
                ans: "C. Server/Client",
              },
              {id: 4, 
                ans: "D. Không có dạng nào",
              }
            ],
            correct: {
              id: 1,
            },

          },
          {
              id: 2,
              question: "Câu 2: Javascript là ngôn ngữ thông dịch hay biên dịch",
              answer:[
                {id: 1, 
                  ans: "A. Thông dịch",
                },
                {id: 2, 
                  ans: "B. Biên dịch",
                },
                {id: 3, 
                  ans: "C. Cả hai dạng",
                },
                {id: 4, 
                  ans: "D. Không có dạng nào ở trên",
                }
              ],
              correct: {
                id: 1,
              },
        
            },
            {
              id: 3,
              question: "Câu 3: Phương thức viết chương trình của Javascript như thế nào?",
              answer:[
                {id: 1, 
                  ans: "A. Viết riêng một trang",
                },
                {id: 2, 
                  ans: "B. Viết chung với HTMl",
                },
                {id: 3, 
                  ans: "C. Cả hai dạng A và B",
                },
                {id: 4, 
                  ans: "D. Không có dạng nào",
                }
              ],
              correct: {
                id: 3,
              },
            },
            {
              id: 4,
              question: "Cấu 4. Javascript là ngôn ngữ kịch bản có dấu được mã nguồn không?",
              answer:[
                {id: 1, 
                  ans: "A. Không dấu được vì các kịch bản chạy ở client.",
                },
                {id: 2, 
                  ans: "B. Dấu được vì chương trình hoạt động độc lập với trình duyệt",
                },
                {id: 3, 
                  ans: "C. Hai phát biểu đều sai.",
                },
                {id: 4, 
                  ans: "D. Hai phát biểu đều đúng",
                }
              ],
              correct: {
                id: 1,
              },
            }
            , {
              id: 5,
              question: "Cấu 5. JavaScript được bắt đầu bằng?",
              answer:[
                {id: 1, 
                  ans: "A. <scritp> …</script>",
                },
                {id: 2, 
                  ans: "B. <Javascript> …<Javascript>",
                },
                {id: 3, 
                  ans: "C. <java>  </java>",
                },
                {id: 4, 
                  ans: "D. Tất cả các dạng trên.",
                }
              ],
              correct: {
                id: 1,
              },
            }, {
              id: 6,
              question: "Cấu 6. Javascript có các dạng biến?",
              answer:[
                {id: 1, 
                  ans: "A. Number, String, Boolean",
                },
                {id: 2, 
                  ans: "B. Number, Integer, char",
                },
                {id: 3, 
                  ans: "C. Number, String, Boolean, Null",
                },
                {id: 4, 
                  ans: "D. Tất cả các loại trên.",
                }
              ],
              correct: {
                id: 3,
              },
            }, {
              id: 7,
              question: "Cấu 7. Trong Javascript hàm parseInt() dùng để làm gì?",
              answer:[
                {id: 1, 
                  ans: "A. Chuyển một chuỗi thành số",
                },
                {id: 2, 
                  ans: "B. Chuyển một chuỗi thành số nguyên",
                },
                {id: 3, 
                  ans: "C. Chuyển một chuỗi thành số thực",
                },
                {id: 4, 
                  ans: "D. Chuyển một số nguyên thành một chuỗi",
                }
              ],
              correct: {
                id: 2,
              },
    
            }, {
              id: 8,
              question: "Cấu 8. Trong Javascript hàm parseFloat() dùng để làm gì?",
              answer:[
                {id: 1, 
                  ans: "A. Chuyển một chuỗi thành số",
                },
                {id: 2, 
                  ans: "B. Chuyển một chuỗi thành số thực",
                },
                {id: 3, 
                  ans: "C. Chuyển một chuỗi thành số nguyên",
                },
                {id: 4, 
                  ans: "D. Chuyển một số nguyên thành một chuỗi",
                }
              ],
              correct: {
                id: 2,
              },

            }, {
              id: 9,
              question: "Cấu 9. Lệnh prompt trong Javascript để làm gì?",
              answer:[
                {id: 1, 
                  ans: "A. Hiện một thông báo nhập thông tin",
                },
                {id: 2, 
                  ans: "B. Hiện một thông báo dạng yes, No",
                },
                {id: 3, 
                  ans: "C. Cả hai dạng trên",
                },
                {id: 4, 
                  ans: "D. Không có lệnh nào đúng",
                }
              ],
              correct: {
                id: 1,
              },
       
            }, {
              id: 10,
              question: "Cấu 10. Trong Javascript sự kiện Onload thực hiện khi:",
              answer:[
                {id: 1, 
                  ans: "A. Khi bắt đầu chương trình chạy",
                },
                {id: 2, 
                  ans: "B. Khi click chuột",
                },
                {id: 3, 
                  ans: "C. Khi kết thúc một chương trình",
                },
                {id: 4, 
                  ans: "D. Khi di chuyển chuột qua.",
                }
              ],
              correct: {
                id: 1,
              },
            },     
        ],
      },
      {
        id: 3,
        title: "Kiểm tra CSS",
        time: 360,
        Point: 100,
        type: 'easy',
        ratings: 5,
        questions: [
          {
            id: 1,
            question: "Câu 1: CSS là viết tắt của?",
            answer:[
              {id: 1, 
                ans: "A. Creative Style Sheets",
              },
              {id: 2, 
                ans: "B. Computer Style Sheets",
              },
              {id: 3, 
                ans: "C. Cascading Style Sheets",
              },
              {id: 4, 
                ans: "D. Colorful Style Sheets",
              }
            ],
            correct: {
              id: 3,
            },
          },
          {
              id: 2,
              question: "Câu 2: Đặt dòng liên kết với file CSS ở vùng nào trong file xHTML?",
              answer:[
                {id: 1, 
                  ans: "A. In the <body> section",
                },
                {id: 2, 
                  ans: "B. In the <head> section",
                },
                {id: 3, 
                  ans: "C. At the top of the document",
                },
                {id: 4, 
                  ans: "D. At the end of the document",
                }
              ],
              correct: {
                id: 2,
              },
 
            },
            {
              id: 3,
              question: "Câu 3: Tag nào định nghĩa CSS ở ngay trong file xHTML?",
              answer:[
                {id: 1, 
                  ans: "A. <css>",
                },
                {id: 2, 
                  ans: "B. <script>",
                },
                {id: 3, 
                  ans: "C. <style>",
                },
                {id: 4, 
                  ans: "D. Tất cả các câu trên đều sai.",
                }
              ],
              correct: {
                id: 3,
              },
            },
            {
              id: 4,
              question: "Cấu 4. Thuộc tính nào định nghĩa CSS ngay trong 1 tag?",
              answer:[
                {id: 1, 
                  ans: "A. Font",
                },
                {id: 2, 
                  ans: "B. Class",
                },
                {id: 3, 
                  ans: "C. Style",
                },
                {id: 4, 
                  ans: "D. Styles",
                }
              ],
              correct: {
                id: 3,
              },
            }, {
              id: 5,
              question: "Cấu 5. Dạng nào tuân theo đúng cú pháp của CSS?",
              answer:[
                {id: 1, 
                  ans: "A. body {color: black}",
                },
                {id: 2, 
                  ans: "B. {body;color:black}",
                },
                {id: 3, 
                  ans: "C. body:color=black",
                },
                {id: 4, 
                  ans: "D. {body:color=black(body}",
                }
              ],
              correct: {
                id: 1,
              },
      
            }, {
              id: 6,
              question: "Cấu 6. What year was JavaScript launched?",
              answer:[
                {id: 1, 
                  ans: "A. 1996",
                },
                {id: 2, 
                  ans: "B. 1995",
                },
                {id: 3, 
                  ans: "C. 1994",
                },
                {id: 4, 
                  ans: "D. none",
                }
              ],
              correct: {
                id: 2,
              },
            }, {
              id: 7,
              question: "Cấu 7. Dạng nào thể hiện đúng một comment (lời chú thích) trong CSS?",
              answer:[
                {id: 1, 
                  ans: "A. /* this is a comment */",
                },
                {id: 2, 
                  ans: "B. // this is a comment //",
                },
                {id: 3, 
                  ans: "C. ‘ this is a comment",
                },
                {id: 4, 
                  ans: "D. // this is a comment",
                }
              ],
              correct: {
                id: 4,
              },
      
            }, {
              id: 8,
              question: "Cấu 8. Dạng nào dùng để thay đổi màu nền?",
              answer:[
                {id: 1, 
                  ans: "A. color:",
                },
                {id: 2, 
                  ans: "B. bgcolor:",
                },
                {id: 3, 
                  ans: "C. background-color:",
                },
                {id: 4, 
                  ans: "D. Tất cả các câu trên đều sai.",
                }
              ],
              correct: {
                id: 3,
              },
            }, {
              id: 9,
              question: "Cấu 9. Làm thế nào thay màu nền của chữ (text)?",
              answer:[
                {id: 1, 
                  ans: "A. text-color=",
                },
                {id: 2, 
                  ans: "B. fgcolor:",
                },
                {id: 3, 
                  ans: "C. color:",
                },
                {id: 4, 
                  ans: "D. text-color:",
                }
              ],
              correct: {
                id: 3,
              },
            }, {
              id: 10,
              question: "Cấu 10. Thuộc tính nào thay đổi kích cỡ chữ?",
              answer:[
                {id: 1, 
                  ans: "A. font-style",
                },
                {id: 2, 
                  ans: "B. font-size",
                },
                {id: 3, 
                  ans: "C. text-style",
                },
                {id: 4, 
                  ans: "D. text-size",
                }
              ],
              correct: {
                id: 2,
              },
            },
        ],
      },
      {
        id: 4,
        title: "Kiểm tra HTML",
        time: 480,
        Point: 300,
        type: 'normal',
        ratings: 3,
        questions: [
          {
            id: 1,
            question: "Câu 1: WWW được dựa trên 3 thành phần:",
            answer:[
              {id: 1, 
                ans: "A. FPT, URL, HTTP",
              },
              {id: 2, 
                ans: "B. HTTP, URL, HTML",
              },
              {id: 3, 
                ans: "C. HTTP, TCP, HTML",
              },
              {id: 4, 
                ans: "D. FTP, IP, HTML",
              }
            ],
            correct: {
              id: 2,
            },
          },
          {
              id: 2,
              question: "Câu 2: Cấu trúc đơn giản của một trang HTML được khai báo theo thứ tự là:",
              answer:[
                {id: 1, 
                  ans: "A. HEAD, HTML, BODY",
                },
                {id: 2, 
                  ans: "B. HEAD, TITLE, BODY",
                },
                {id: 3, 
                  ans: "C. HEAD, BODY, HTML",
                },
                {id: 4, 
                  ans: "D. HTML, HEAD, BODY",
                }
              ],
              correct: {
                id: 4,
              },
            },
            {
              id: 3,
              question: "Câu 3: Để trình bày một đoạn văn bản trong tài liệu HTML ta dùng thẻ:",
              answer:[
                {id: 1, 
                  ans: "A. <HR>",
                },
                {id: 2, 
                  ans: "B. <P>",
                },
                {id: 3, 
                  ans: "C. <BR>",
                },
                {id: 4, 
                  ans: "D. <PRE>",
                }
              ],
              correct: {
                id: 2,
              },
   
            },
            {
              id: 4,
              question: "Cấu 4. Để chèn hình ảnh vào trang web ta dùng thẻ:",
              answer:[
                {id: 1, 
                  ans: "A. <PIC>",
                },
                {id: 2, 
                  ans: "B. <IMG>",
                },
                {id: 3, 
                  ans: "C. <IMAGE>",
                },
                {id: 4, 
                  ans: "D. <PICTURE>",
                }
              ],
              correct: {
                id: 3,
              },
            }
            , {
              id: 5,
              question: "Cấu 5. Để nhóm các thành phần có liên quan với nhau ta dùng thẻ:?",
              answer:[
                {id: 1, 
                  ans: "A. <SPAN>",
                },
                {id: 2, 
                  ans: "B. <PRE>",
                },
                {id: 3, 
                  ans: "C. <BLOCKQUOTE>",
                },
                {id: 4, 
                  ans: "D.  <DIV>",
                }
              ],
              correct: {
                id: 4,
              },
   
            }, {
              id: 6,
              question: "Cấu 6. Để khai báo một danh sách có thứ tự ta sử dụng thẻ:?",
              answer:[
                {id: 1, 
                  ans: "A. <LI>",
                },
                {id: 2, 
                  ans: "B. <UL>",
                },
                {id: 3, 
                  ans: "C. <OL>",
                },
                {id: 4, 
                  ans: "D. <DL>"
                }
              ],
              correct: {
                id: 2,
              },
            }, {
              id: 7,
              question: "Cấu 7. Để xác định kiểu chữ, kích thước, màu sắc... ta dùng thẻ:?",
              answer:[
                {id: 1, 
                  ans: "A. <COLOR>",
                },
                {id: 2, 
                  ans: "B. <FONT>",
                },
                {id: 3, 
                  ans: "C. <FONTSTYLE>",
                },
                {id: 4, 
                  ans: "D. <FONTSIZE>",
                }
              ],
              correct: {
                id: 2,
              },

            }, {
              id: 8,
              question: "Cấu 8. Để khai báo một bảng trên trang web ta sử dụng thẻ:?",
              answer:[
                {id: 1, 
                  ans: "A. <TR>",
                },
                {id: 2, 
                  ans: "B. <TD>",
                },
                {id: 3, 
                  ans: "C. <TABLE>",
                },
                {id: 4, 
                  ans: "D. <TH>",
                }
              ],
              correct: {
                id: 3,
              },
            }, {
              id: 9,
              question: "Cấu 9. Để định nghĩa một tập các FRAME đơn ta sử dụng thẻ:?",
              answer:[
                {id: 1, 
                  ans: "A. <FRAME>",
                },
                {id: 2, 
                  ans: "B. <NOFRAME>",
                },
                {id: 3, 
                  ans: "C. <IFFRAME>",
                },
                {id: 4, 
                  ans: "D. <FRAMESET>",
                }
              ],
              correct: {
                id: 3,
              },
            }, 
            {
              id: 10,
              question: "Cấu 10. What year was JavaScript launched?",
              answer:[
                {id: 1, 
                  ans: "A. 1996",
                },
                {id: 2, 
                  ans: "B. 1995",
                },
                {id: 3, 
                  ans: "C. 1994",
                },
                {id: 4, 
                  ans: "D. none",
                }
              ],
              correct: {
                id: 2,
              },
            },
        ],
      },
  ];
  
  export default quizs;
  