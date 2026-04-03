// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'invest-at-13';
export const SITE_DESCRIPTION = '13歳がAI・投資・ゲーム・料理を本気で語る';

export const CATEGORIES = [
	{ label: 'AI活用', value: 'ai', emoji: '🤖' },
	{ label: '投資', value: 'investment', emoji: '📈' },
	{ label: 'ゲーム', value: 'game', emoji: '🎮' },
	{ label: '料理', value: 'cooking', emoji: '🍳' },
	{ label: 'ガジェット', value: 'gadget', emoji: '📱' },
] as const;

export type CategoryValue = 'ai' | 'investment' | 'game' | 'cooking' | 'gadget';
