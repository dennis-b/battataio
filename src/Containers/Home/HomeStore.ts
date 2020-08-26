import { action, observable } from "mobx";
import { AppStore } from "../../App/AppStore";

export const homeStoreSelector = ({ appStore }: { appStore: AppStore }) => ({ homeStore: appStore.homeStore });

export interface WithHomeStore {
    homeStore: HomeStore
}

export class HomeStore {

    @observable data: any[] = [];

    rootStore: AppStore;

    constructor(rootStore: AppStore) {
        this.rootStore = rootStore;
    }

    @action
    setData = (data: any) => {
        this.data = data
    };

    @action
    update = ({ sectionId, itemId, val }) => {
        const { data } = this.data.find(section => section.id == sectionId)
        const itemData = data.find(item => item.id === itemId)
        itemData.value = val
    };
}
