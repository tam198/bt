function myFunction1() {
    var x = document.getElementById("question");
    var y = document.getElementById("btn");
    x.style.display = "block";
    y.style.display = "none";
    document.getElementById("luoi1").style.display='block';
}   
function close1() {
    var z = document.getElementById("luoi1");
    z.style.display = "none";
    document.getElementById("btn").style.display='block';
}

//bocauhoi.js
//1 bo cau hoi co 3 tham so dau vao 
function Question(text, choices, answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.correctAnswer=function(choice){
    return choice === this.answer;
}
//answer.js
function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
}

Quiz.prototype.getQuestionIndex=function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded=function(){
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.guess=function(answer){
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

//ham tra ve diem, so cau tra loi dung
function showScores() {
    var gameOverHtml = "<h1>Kết quả</h1><br>";
    gameOverHtml += '<h2 id="score"> Điểm của bạn: ' + quiz.score + '</h2>';
    var element = document.getElementById("question");
    element.innerHTML=gameOverHtml;
};

//app.js
//truyen du lieu
//thay doi cau hoi va dap an
function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question
        var element=document.getElementById('cauhoi');
        element.innerHTML = quiz.getQuestionIndex().text; //cau hoi duoc truyen vao

        //showchoices
        //phuong an lan luot duoc truyen vao
        //sau khi chon 1 dap an xong se chuyen sang cau hoi va cac phuong an khac
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i<choices.length; i++){
            var element=document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            guess("bttn"+i, choices[i]);
        }
    }
};



//ham truyen dap an vao 1 trong 4 nut
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
}
//tao danh sach cac cau hoi va dap an
var questions = [
    new Question("Bài hát có đoạn “Một con đò sang ngang. Ôi lòng thầy mênh mang. Cho em biết yêu cánh cò trong câu ca dao…” là của tác giả nào?", ["Trần Tiến", "Hàn Ngọc Bích", "Lưu Hà An", "Trần Đức"], "Trần Đức"),
    new Question("Nền giáo dục Việt Nam là nền giáo dục xã hội chủ nghĩa có tính nhân dân, dân tộc, khoa học, hiện đại, lấy chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh làm nền tảng ghi trong văn bản nào sau đây?", ["Điều lệ trường Cao đẳng", "Luật giáo dục", "Nghị quyết của Đảng", "Tất cả các văn bản trên"], "Luật giáo dục"),
    new Question("Quy chế đào tạo đại học và cao đẳng hệ chính quy theo hệ thống tín chỉ được quy định tại:", ["Luật giáo dục", "Quy chế 43/2007/QĐ-GDĐT", "Quy chế 25/2006/ QĐ-GDĐT", "Quyết định số 31/2001/ QĐ-GDĐT"], "Quy chế 43/2007/QĐ-GDĐT"),
    new Question("Câu nói: “Một dân tộc muốn tồn tại và phát triển phải có Thứ (đông dân), Phú (giàu), Giáo (được giáo dục)” là của ai", ["Lê Quý Đôn (1726 -1784)", "Khổng Tử (551- 479 trước CN)", "Mạnh Tử (trước CN 372 –trước CN 289)", "La Sơn Phu Tử Nguyễn Thiếp (1723 – 1804)"], "Khổng Tử (551- 479 trước CN)"),
    new Question("“Người thầy trung bình chỉ biết nói, Người thầy giỏi biết giải thích, Người thầy xuất chúng biết minh họa, Người thầy vĩ đại biết cách truyền cảm hứng ’’. Đây là câu nói của ai?", ["V.A.Xukhomlinxki", "Usinxki", "William A. Warrd", "Comenxki"], "William A. Warrd"),
    new Question("Trong dạy học hướng vào người học, thầy giáo và học sinh đóng vai trò như thế nào?", ["Thầy chủ động, trò tích cực", "Thầy chủ đạo, trò chủ động", "Thầy chủ động, trò thụ động", "Thầy dạy, trò ghi nhớ"], "Thầy chủ đạo, trò chủ động"),
    new Question("Hiện tượng nào chứng tỏ sinh lý có ảnh hưởng đến tâm lí?", ["Lạnh làm run người", "Buồn rầu làm ngưng hệ tiêu hóa", "Tuyến nội tiết làm thay đổi tâm trạng", "Cả A, B, C"], "Tuyến nội tiết làm thay đổi tâm trạng"),
    new Question("“Chú trọng nội dung giáo dục đạo đức, pháp luật, thể chất, quốc phòng - an ninh và các giá trị văn hóa truyền thống; giáo dục kĩ năng sống, giáo dục lao động và hướng nghiệp học sinh phổ thông” là nội dung của giải pháp nào trong Chiến lược phát triển giáo dục 2011 – 2020?", ["Đổi mới quản lí giáo dục - đào tạo", "Đổi mới nội dung, phương pháp dạy học, thi, kiểm tra đánh giá chất lượng giáo dục", "Tăng cường gắn đào tạo với sử dụng, nghiên cứu khoa học, chuyển giao công nghệ", "Tăng cường hỗ trợ phát triển giáo dục đối với các vùng khó khăn, dân tộc thiểu số và đối tượng chính sách xã hội"], "Đổi mới nội dung, phương pháp dạy học, thi, kiểm tra đánh giá chất lượng giáo dục"),
    new Question("The concept of lesson plans in modern teaching methodology is as follows:", ["Lesson plans are the plans of teacher’s activities in class", "Lesson plans are the plans of teaching and learning contents of teacher and learners in a lesson", "Lesson plans show the content of a lesson and teaching and learning methods", "Lesson plans are the design of activities for students through teachers’ orientation"], "Lesson plans are the design of activities for students through teachers’ orientation"),
    new Question("Who decides the Professional Standards of Teachers at Lower and Upper Secondary Schools?", ["The Minister of Ministry of Education and Training", "The Prime Minister", "The Director of Education and Training Department", "The Principal of the School"], "The Minister of Ministry of Education and Training")
];

//tao quiz
var quiz = new Quiz(questions);

//hien thi quiz
populate();
