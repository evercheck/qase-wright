import { Page } from "playwright/test";
import { expect } from "@playwright/test";

export default class PepTalk {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    txtChat = () => this.page.locator("div.chat-input textarea");
    //(//div[div[contains(@class, 'chat-message-text') and normalize-space(text())='Thanh846593285@gmail.com and 846593285']]/preceding-sibling::div)
    // lblMessage = (msg: string) => this.page.locator(`//div[contains(@class, 'chat-message-text') and normalize-space(text())='${msg}']`)
    lblMessage = (msg: string) => this.page.locator(`//div[div[contains(@class, 'chat-message-text') and normalize-space(text())='${msg}']]/preceding-sibling::div[contains(@class, 'chat-message-received')]`);
    ////div[div[contains(@class, 'chat-message-text') and normalize-space(text())='Max 5000']]/preceding-sibling::div[contains(@class, 'chat-message-received')]
    lblChatMessage = () => this.page.locator("div.chat-message");
    btnSubmit = () => this.page.locator("button.chat-input-submit");

    public async open() {
        await this.page.goto('https://ask.getapeptalk.com/');
    }
    public async chatwithcertainbudget() {
        const chat = 'hi';
        const chat1 = 'I am looking for someone to talk about International Women s Day';
        const chat2 = 'in person session please';
        const chat3 = 'Something like €1k-2k';
        const chat4 = 'Please show me additional experts';
        const chat5 = 'I am interested in expert-level information of Tamara Gillan. Can you delve deeper into the details?';
        const chat6 = 'which session she can talk about?';
        const chat7 = 'I am looking for a woman with a story of overcoming challenges';
        const chat8 = 'ABCD123';
        const chat9 = 'Can you show me experts with budget with no restriction';
        const chat10 = 'I want to find an Olympian Expert in Game 2024';
        const chat11 = 'Can you tell me about Kate Richardson-Walsh OBE';
        const chat12 = 'How about Dame Inga Beale?';
        const chat13 = 'I would like to book Richardson-Walsh OBE';
        const chat14 = 'Thanh846593285@gmail.com and 846593285';
        const chat15 = 'I would like to have meeting in lONDON';
        const chat16 = 'Tell me alittle bit about Sophie Williams';
        const chat17 = 'I want to hear more about her, Could you?';


        await this.txtChat().fill(chat);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(2);
        await expect(this.lblMessage(chat)).toBeVisible();
        await this.txtChat().fill(chat1);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(3);
        await expect(this.lblMessage(chat1)).toBeVisible();
        await this.txtChat().fill(chat2);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat2)).toBeVisible();
        await this.txtChat().fill(chat15);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(4);
        await expect(this.lblMessage(chat15).last()).toBeVisible();
        await this.txtChat().fill(chat3);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat3).last()).toBeVisible();
        await this.txtChat().fill(chat16);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(17);
        await expect(this.lblMessage(chat16).last()).toBeVisible();
        await this.txtChat().fill(chat17);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(6);
        await expect(this.lblMessage(chat17).last()).toBeVisible();
        await this.txtChat().fill(chat4);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(8);
        await expect(this.lblMessage(chat4).last()).toBeVisible();
        await this.txtChat().fill(chat5);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat5)).toBeVisible();
        await this.txtChat().fill(chat6);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat6).last()).toBeVisible();
        await this.txtChat().fill(chat7);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat7).last()).toBeVisible();
        await this.txtChat().fill(chat8);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat8)).toBeVisible();
        await this.txtChat().fill(chat9);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat9).last()).toBeVisible();
        await this.txtChat().fill(chat10);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat10).last()).toBeVisible();
        await this.txtChat().fill(chat11);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(13);
        await expect(this.lblMessage(chat11)).toBeVisible();
        await this.txtChat().fill(chat12);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(14);
        await expect(this.lblMessage(chat12)).toBeVisible();
        await this.txtChat().fill(chat13);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat13)).toBeVisible();
        await this.txtChat().fill(chat14);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat14).last()).toBeVisible();
    }
    public async chatwithflexiblebudget() {
        const chat = 'hi';
        const chat1 = 'In our search for experts, who can contribute insights into Change and Transformation?';
        const chat2 = 'in person session please';
        const chat3 = 'I am flexible with the budget';
        const chat4 = 'Can you show me other options?';
        const chat5 = 'I would like to see additional options, please.';
        const chat6 = 'which session Jamie Clements can talk about?';
        const chat7 = 'I am looking for a woman with a story of overcoming challenges';
        const chat8 = 'Can you show me more options?';
        const chat9 = 'Can you show me experts with budget up to 3000';
        const chat10 = 'I want to find an Olympian Expert in Game 2024';
        const chat11 = 'Can you tell me about James Cracknell OBE';
        const chat12 = 'How about Christian Malcolm';
        const chat13 = 'I would like to book Pete Reed OBE';
        const chat14 = 'Thanh846593285@gmail.com and 846593285';
        const chat15 = 'I would like to have meeting in lONDON';
        const chat16 = 'Tell me alittle bit about Grace Francis';
        const chat17 = 'I want to hear more about her, Could you?';


        await this.txtChat().fill(chat);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(2);
        await expect(this.lblMessage(chat)).toBeVisible();
        await this.txtChat().fill(chat1);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(3);
        await expect(this.lblMessage(chat1)).toBeVisible();
        await this.txtChat().fill(chat2);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat2)).toBeVisible();
        await this.txtChat().fill(chat15);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(4);
        await expect(this.lblMessage(chat15).last()).toBeVisible();
        await this.txtChat().fill(chat3);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat3).last()).toBeVisible();
        await this.txtChat().fill(chat16);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(17);
        await expect(this.lblMessage(chat16).last()).toBeVisible();
        await this.txtChat().fill(chat17);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(6);
        await expect(this.lblMessage(chat17).last()).toBeVisible();
        await this.txtChat().fill(chat4);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(8);
        await expect(this.lblMessage(chat4).last()).toBeVisible();
        await this.txtChat().fill(chat5);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat5).last()).toBeVisible();
        await this.txtChat().fill(chat6);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat6).last()).toBeVisible();
        await this.txtChat().fill(chat7);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat7).last()).toBeVisible();
        await this.txtChat().fill(chat8);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat8).last()).toBeVisible();
        await this.txtChat().fill(chat9);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat9).last()).toBeVisible();
        await this.txtChat().fill(chat10);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat10).last()).toBeVisible();
        await this.txtChat().fill(chat11);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(13);
        await expect(this.lblMessage(chat11)).toBeVisible();
        await this.txtChat().fill(chat12);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(14);
        await expect(this.lblMessage(chat12)).toBeVisible();
        await this.txtChat().fill(chat13);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat13)).toBeVisible();
        await this.txtChat().fill(chat14);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat14).last()).toBeVisible();
    }

    public async chatwitheither() {
        const chat = 'hi';
        const chat1 = 'I need someone to talk about Diversity with my team, especially about allyship';
        const chat2 = 'either';
        const chat3 = 'around 3000';
        const chat4 = 'Can you show me other options?';
        const chat5 = 'I would like to see additional options, please.';
        const chat6 = 'which session Ruth Rathblott can talk about?';
        const chat7 = 'I want to find an expert to talk about Marketing Trailblazer';
        const chat8 = 'Can you show me more options?';
        const chat9 = 'Can you show me experts with flexible budget';
        const chat10 = 'I want to find an Olympian Expert in Game 2024';
        const chat11 = 'Can you tell me about Dana Lynn Hee';
        const chat12 = 'How about Eboni Usoro-Brown';
        const chat13 = 'I would like to book Sam Quek';
        const chat14 = 'Thanh846593285@gmail.com and 846593285';

        await this.txtChat().fill(chat);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(2);
        await expect(this.lblMessage(chat)).toBeVisible();
        await this.txtChat().fill(chat1);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(3);
        await expect(this.lblMessage(chat1)).toBeVisible();
        await this.txtChat().fill(chat2);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat2)).toBeVisible();
        await this.txtChat().fill(chat3);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat3).last()).toBeVisible();
        await this.txtChat().fill(chat4);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(8);
        await expect(this.lblMessage(chat4).last()).toBeVisible();
        await this.txtChat().fill(chat5);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat5).last()).toBeVisible();
        await this.txtChat().fill(chat6);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat6).last()).toBeVisible();
        await this.txtChat().fill(chat7);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat7).last()).toBeVisible();
        await this.txtChat().fill(chat8);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat8).last()).toBeVisible();
        await this.txtChat().fill(chat9);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat9).last()).toBeVisible();
        await this.txtChat().fill(chat10);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat10).last()).toBeVisible();
        await this.txtChat().fill(chat11);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(13);
        await expect(this.lblMessage(chat11)).toBeVisible();
        await this.txtChat().fill(chat12);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(14);
        await expect(this.lblMessage(chat12)).toBeVisible();
        await this.txtChat().fill(chat13);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat13)).toBeVisible();
        await this.txtChat().fill(chat14);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat14).last()).toBeVisible();
    }

    public async chatwithAcronyms() {
        const chat = 'hi';
        const chat1 = 'DEI';
        const chat2 = 'either';
        const chat3 = 'around 3000';
        const chat4 = 'Can you show me other options?';
        const chat5 = 'I would like to see additional options, please.';
        const chat6 = 'Find experts in OG?';
        const chat7 = 'I want to find an expert to talk about Marketing Trailblazer';
        const chat8 = 'Can you show me more options?';
        const chat9 = 'Can you show me experts with flexible budget';
        const chat10 = 'I want to find UX expert';
        const chat11 = 'Can you tell me about Katie Traxton';
        const chat12 = 'How about Ruth Rathblott';
        const chat13 = 'I would like to book Ruth Rathblott';
        const chat14 = 'Thanh846593285@gmail.com and 846593285';

        await this.txtChat().fill(chat);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(2);
        await expect(this.lblMessage(chat)).toBeVisible();
        await this.txtChat().fill(chat1);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(3);
        await expect(this.lblMessage(chat1)).toBeVisible();
        await this.txtChat().fill(chat2);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat2)).toBeVisible();
        await this.txtChat().fill(chat3);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat3).last()).toBeVisible();
        await this.txtChat().fill(chat4);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(8);
        await expect(this.lblMessage(chat4).last()).toBeVisible();
        await this.txtChat().fill(chat5);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat5).last()).toBeVisible();
        await this.txtChat().fill(chat6);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat6).last()).toBeVisible();
        await this.txtChat().fill(chat7);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat7).last()).toBeVisible();
        await this.txtChat().fill(chat8);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat8).last()).toBeVisible();
        await this.txtChat().fill(chat9);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat9).last()).toBeVisible();
        await this.txtChat().fill(chat10);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat10).last()).toBeVisible();
        await this.txtChat().fill(chat11);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(13);
        await expect(this.lblMessage(chat11)).toBeVisible();
        await this.txtChat().fill(chat12);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(14);
        await expect(this.lblMessage(chat12)).toBeVisible();
        await this.txtChat().fill(chat13);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat13)).toBeVisible();
        await this.txtChat().fill(chat14);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat14).last()).toBeVisible();
    }
}