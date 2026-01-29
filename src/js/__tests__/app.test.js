import { Settings } from '../app.js'

let userSettings;

beforeEach(() => {
    userSettings = new Settings();
})

test('returns default settings if user did not change anything', () => {
    expect(userSettings.settings.get('theme')).toBe('dark');
    expect(userSettings.settings.get('music')).toBe('trance');
    expect(userSettings.settings.get('difficulty')).toBe('easy');
});

test('user setting overrides default setting', () => {
    userSettings.set('music', 'rock');
    expect(userSettings.settings.get('music')).toBe('rock');
});

test('other default settings remain unchanged', () => {
    userSettings.set('music', 'rock');
    expect(userSettings.settings.get('theme')).toBe('dark');
    expect(userSettings.settings.get('difficulty')).toBe('easy');
});

test('settings returns Map', () => {
    expect(userSettings.settings instanceof Map).toBe(true);
});
