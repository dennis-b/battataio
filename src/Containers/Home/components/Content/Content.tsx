import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";

import { LEFT_BAR_WIDTH } from "../styled";
import { StContainer } from "../../../../Components";
import { ContentHeader } from "./ContentHeader";
import { loadData } from "../../../../Api";
import { homeStoreSelector, WithHomeStore } from "../../HomeStore";
import { ContentSections } from "./ContentSections";

function ContentView({ homeStore }: WithHomeStore) {

    const [loading, setLoading] = useState<boolean>()

    async function loadEntityData() {
        setLoading(true)
        const data = await loadData()
        homeStore.setData(data)
        setLoading(false)
    }

    useEffect(() => {
        loadEntityData()
    }, [])


    if (loading) {
        return <div>Loading...</div>
    }

    const { data } = homeStore;

    return (
        <StContainer
            display='flex'
            direction='column'
            height="`calc(100% - ${TOP_BAR_HEIGHT}px)`"
            ml={`${LEFT_BAR_WIDTH}px`}
            p={2}
        >
            <ContentHeader />
            {data && <ContentSections data={data} />}
        </StContainer>
    )
}

const enhance = compose(
    inject(homeStoreSelector),
    observer,
);

export const Content = enhance(ContentView as any);
