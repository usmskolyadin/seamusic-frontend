'use strict';

module.exports = {
	// Добавим описание на русском языке ко всем типам
	types: [
		{
			value: 'build',
			name: 'build:     Сборка проекта или изменения внешних зависимостей',
		},
		{ value: 'ci', name: 'ci:        Настройка CI и работа со скриптами' },
		{ value: 'docs', name: 'docs:      Обновление документации' },
		{ value: 'feat', name: 'feat:      Добавление нового функционала' },
		{ value: 'fix', name: 'fix:       Исправление ошибок' },
		{
			value: 'perf',
			name: 'perf:      Изменения направленные на улучшение производительности',
		},
		{
			value: 'refactor',
			name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
		},
		{ value: 'revert', name: 'revert:    Откат на предыдущие коммиты' },
		{
			value: 'style',
			name: 'style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
		},
		{ value: 'test', name: 'test:      Добавление тестов' },
	],

	// Область. Она характеризует фрагмент кода, которую затронули изменения
	scopes: [
		{ name: 'app' },
		{ name: 'entities' },
		{ name: 'features' },
		{ name: 'pages' },
		{ name: 'shared' },
		{ name: 'widgets' },
	],

	// Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
	/*
    scopeOverrides: {
      fix: [
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */

	// Поменяем дефолтные вопросы
	messages: {
		type: 'Какие изменения вы вносите?',
		scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
		// Спросим если allowCustomScopes в true
		// customScope: "Укажите свою ОБЛАСТЬ:",
		subject: 'Напишите КОРОТКОЕ описание (ЗАГОЛОВОК):\n',
		body: 'Напишите ПОДРОБНОЕ описание (что было изменено и почему). Используйте "|" для новой строки:\n',
		// breaking: "Список BREAKING CHANGES (опционально):\n",
		footer:
			'Перечислите все ISSUE, ЗАКРЫТЫЕ этим изменением (необязательно). Например: #31, #34::\n',
		confirmCommit: 'Вас устраивает получившийся коммит?',
	},

	// Разрешим собственную ОБЛАСТЬ
	allowCustomScopes: false,

	// Запрет на Breaking Changes
	allowBreakingChanges: false,

	// Префикс для нижнего колонтитула
	footerPrefix: 'МЕТА ДАННЫЕ:',

	// limit subject length
	subjectLimit: 72,
};
