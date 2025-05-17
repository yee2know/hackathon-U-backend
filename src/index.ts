import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// 미들웨어 설정
app.use(cors()); // 모든 origin에서의 요청 허용
app.use(express.static("public")); // public 폴더 정적 파일 제공
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: false })); // URL-encoded 파싱

// 라우팅 예시
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 서버 실행
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
