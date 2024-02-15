import { ChapterMenu } from "../interfaces/menu.interfaces";

export const chapterMenuMock: ChapterMenu = {
    chapters: [
        {
            type: 'chapter',
            id: '1',
            heading: 'chapter 1',
            index: 1,
            items: [
                {
                    type: 'section-group',
                    id: '2',
                    heading: 'section 1',
                    items: [
                        {
                            type: 'page',
                            id: '4',
                            heading: 'page 1',
                            path: '/page/4',
                            items: [
                                {
                                    type: 'page-panel',
                                    id: '5',
                                    heading: 'page panel 1',
                                    path: '/page/4'
                                },
                                {
                                    type: 'page-panel',
                                    id: '6',
                                    heading: 'page panel 2',
                                    path: '/page/4/panel/2'
                                },
                                {
                                    type: 'question-group',
                                    heading: 'question group 1',
                                    id: '10',
                                    items: [
                                        {
                                            type: 'page-panel',
                                            id: '11',
                                            heading: 'page panel 5',
                                            path: ''
                                        },
                                        {
                                            type: 'page-panel',
                                            id: '11',
                                            heading: 'page panel 6',
                                            path: ''
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type:'page-panel',
                            id: '7',
                            heading: 'page panel 3',
                            path: 'page/7'
                        },
                        {
                            type:'page-panel',
                            id: '8',
                            heading: 'page panel 4',
                            path: 'page/7/panel/2'
                        },
                        {
                            type:'page',
                            id: '9',
                            heading: 'page2',
                            path: 'page/5',
                            items: []
                        }
                    ]
                },
                {
                    type: 'section-group',
                    id: '3',
                    heading: 'section 2',
                    items: []
                }
            ],
            path: '/chapter/1',
        }
    ]
}