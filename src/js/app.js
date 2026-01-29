const defaulSettings = new Map(
    [
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy'],
    ]
)

export class Settings {
    constructor() {
        this.defaulSettings = defaulSettings;
        this.userSettings = new Map();
    }

    set(name, value) {
        this.userSettings.set(name, value);
    }

    get settings() {
        const result = new Map(this.defaulSettings)

        for (const [key, value] of this.userSettings) {
            result.set(key, value);
        }
        return result;
    }
}

