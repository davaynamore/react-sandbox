/**
 * @class StorageHelper
 * @classdesc Класс предоставляющий функционал для работы с локальным хранилищем
 * @see https://www.npmjs.com/package/js-cookie - возможно вместо него будет использоваться js-cookie
 */
class StorageHelper {
    private storage = localStorage;
    /**
     * @method get
     * @param key позволяет получить доступ к соответствующей сущности
     * локального хранилища по ключу
     * @return {any}
     */
    get = (key: string): Record<string, any> => {
        const valueFromStorage = this.storage.getItem(key);

        if (!valueFromStorage) {
            return {};
        }

        return JSON.parse(valueFromStorage);
    };

    /**
    * @method set
    * @param key ключ, с помощью которого можно получить доступ к данной сущности
    * @param value сущность, которую необходимо хранить в локальном хранилище
    * @returns void
    */
    set = (key: string, value: any): void => this.storage.setItem(key, JSON.stringify(value));

    /**
    * @method remove
    * @param key ключ по которому соответствующая сущность будет удалена из локального хранилища
    */
    remove = (key: string): void => this.storage.removeItem(key);
};

export default StorageHelper;