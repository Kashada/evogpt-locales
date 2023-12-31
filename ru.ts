export default {
  colon: ':',
  header: {
    joinDc: 'Присоединиться'
  },
  auth: {
    title: 'Аккаунт',
    login: 'Войти',
    logout: 'Выйти',
    signup: 'Зарегистрироваться',
    email: 'Адрес электронной почты',
    username: 'Имя пользователя',
    usernameOrEmail: 'Имя пользователя / адрес электронной почты',
    passwd: 'Пароль',
    veriCode: 'Код подтверждения',
    getVeriCode: 'Получить код подтверждения',
    sendingVeriCode: 'Отправка кода подтверждения...',
    loggingIn: 'Вход в систему...',
    alreadyHaveAnAcc: 'Уже есть аккаунт?',
    createNewAcc: 'Создать новый аккаунт!',
    forgotPw: 'Забыли пароль?',
    emailRequired: 'Требуется адрес электронной почты.',
    emailInvalid: 'Недопустимый формат адреса электронной почты.',
    usernameOrEmailRequired: 'Требуется имя пользователя или адрес электронной почты.',
    usernameRequired: 'Требуется имя пользователя.',
    usernameLength: 'Длина имени пользователя: от 5 до 32 символов',
    passwdRequired: 'Требуется пароль.',
    passwdLength: 'Длина пароля: от 8 до 64 символов',
    veriCodeRequired: 'Требуется код подтверждения.',
    confirmChangeEmail: 'Вы уверены, что хотите изменить адрес электронной почты?',
    notReceiveVeriCode: 'Не получили код подтверждения?',
    formIncomplete: 'Форма заполнена неполностью!'
  },
  action: {
    more: 'Дополнительные действия',
    rename: 'Переименовать',
    renameConv: 'Переименовать разговор',
    refresh: 'Обновить разговор',
    regenerate: 'Сгенерировать заново',
    continueGenerate: 'Продолжить генерацию',
    resend: 'Повторно отправить',
    change: 'Изменить',
    copy: 'Копировать',
    copySuccess: 'Скопировано!',
    copyFailed: 'Не удалось скопировать.',
    delete: 'Удалить',
    deleteConv: 'Удалить разговор',
    exportAs: 'Экспортировать как',
    newVersion: 'Вышла новая версия! Хотите перезагрузить страницу?',
    opCanceled: 'Операция отменена.',
    opExecuted: 'Операция выполнена.',
  },
  message: {
    renameConvHint: 'Пожалуйста, введите заголовок разговора:',
    renameSuccess: 'Разговор был переименован.',
    deleteConvConfirm: 'Вы уверены, что хотите удалить этот диалог? Это действие нельзя отменить!',
    deleteMsgConfirm: 'Удалить этот вопрос и его ответы?',
    notice: 'Уведомление',
    warning: 'Предупреждение',
    setting: 'Настройка',
    ok: 'OK',
    cancel: 'Отмена',
    yes: 'Да',
    no: 'Нет',
  },
  menu: {
    title: 'Меню',
    about: 'О программе',
    joinDcMessage: 'Присоединяйтесь к нашему серверу Discord, чтобы быть в курсе последних новостей от EvoGPT!',
    webInfo1: 'Базовый: ',
    webInfo2: 'Разрешить извлечение URL-адресов из вопроса или использовать поисковую систему для запроса вопроса. ',
    webInfo3: 'Расширенный: ',
    webInfo4: 'Разрешить извлечение URL-адресов из вопроса, позволить ИИ определить данные для поиска и предоставить заключение после суммирования нескольких веб-страниц. ',
    expFeat1: 'Это занимает некоторое время.',
    expFeat2: 'Это займет больше времени.',
    tempInfo: 'При более высоких значениях увеличивается случайность и разнообразие, а при более низких значениях уменьшается случайность и вывод становится более предсказуемым.',
  },
  settings: {
    title: 'Настройки',
    model: 'Модель',
    lang: 'Язык интерфейса',
    webBrowsing: 'Веб-поиск',
    off: 'Выкл.',
    on: 'Вкл.',
    enable: 'Включить',
    disable: 'Отключить',
    basic: 'Базовый',
    advanced: 'Расширенный',
    context: 'Контекст',
  },
  chat: {
    chats: 'Разговоры',
    newChat: 'Новый разговор',
    letsStart: 'Давайте начнем!',
    send: 'Отправить',
  },
  error: {
    qTooLong: 'Вопрос слишком длинный.',
    plzRefresh: 'Пожалуйста, обновите страницу.'
  },
  footer: {
    patient: 'Пожалуйста, будьте терпеливы, это может занять несколько минут.',
  }
}
