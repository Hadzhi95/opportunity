require('dotenv').config();

const express = require('express');
const cors = require('cors');

const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const upload = require('./middlewares/middlewares');

const { PORT } = process.env || 3001;

// const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const postsRouter = require('./routes/postsRouter');
const workersRoutes = require('./routes/workersRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'snovaisnova', // строка для шифрования сессии
    resave: false, // не пересохраняем сессию если не было изменений
    saveUninitialized: false, // не сохраняем сессию если она пустая
    cookie: { secure: false }, // не HTTPS
    name: 'login', // имя сессионной куки
    store: new FileStore(), // хранилище для куков - папка с файлами
  }),
);
// app.use(welcomeUser);

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/workers', workersRoutes);

app.listen(PORT, () => {
  console.log(`server podnyat my capitan on port ${PORT}`);
});
