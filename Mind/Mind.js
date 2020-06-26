const quest = document.querySelector('.quest')
const Qouter = document.querySelector('.Q-outer')
const Qtext = document.querySelectorAll('.texts')
const chooseFt = document.querySelector('.text-first')
const chooseSd = document.querySelector('.text-second')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const typeTextContent = document.querySelector('.type-text-content')

const Qitems = {
    Q1T: 'Q1 . 我傾向從何處得到力量？',
    Q1A: '別人',
    Q1B: '我自己的想法',
    Q2T: 'Q2 . 當我參加一個社交聚會時，我傾向從何處擁有更多的氣力？',
    Q2A: '在夜色很深時，一旦我開始投入也許就是最晚離開的那一個',
    Q2B: '在夜晚開始的時候，我就疲倦想回家了',
    Q3T: 'Q3 . 下列哪種聽起來較吸引人？',
    Q3A: '與我的情人到有很多人且社交活動頻繁的地方',
    Q3B: '待在家中與我的情人做一些特別的事情，如觀賞一部有趣的影片並享用我最愛的外帶食物',
    Q4T: 'Q4 . 在約會中我通常...',
    Q4A: '整體來說蠻健談的',
    Q4B: '較安靜且保留，直到我覺得舒服',
    Q5T: 'Q5 . 在過去我大部分情人都在何處遇見？',
    Q5A: '在宴會中、夜總會、工作上、休閒活動中、會議上、或當朋友介紹我給他們的朋友時',
    Q5B: '透過私人的方式，如個人廣告、錄影約會、或由親密的朋友和家人介紹',
    Q6T: 'Q6 . 我傾向擁有...',
    Q6A: '很多認識的人和很親密的朋友',
    Q6B: '一些很親密的朋友和一些認識的人',
    Q7T: 'Q7 . 在過去我愛的人和情人傾向對我說...',
    Q7A: '你難道不可以安靜一點嗎？',
    Q7B: '可以請你從你的世界中出來一下嗎？',
    Q8T: 'Q8 . 我傾向透過以下方式收集資訊...',
    Q8A: '我對有可能發生的事情的想像和期望',
    Q8B: '我對目前狀況的實際認知',
    Q9T: 'Q9 . 我傾向相信...',
    Q9A: '我的直覺',
    Q9B: '我直接的觀察和現成的經驗',
    Q10T: 'Q10 . 當在一段關係中時我傾向相信...',
    Q10A: '永遠有進步的空間',
    Q10B: '若它沒有被破壞別修補它',
    Q11T: 'Q11 . 當我對一個約會覺得放心時我傾向談論...',
    Q11A: '未來有關於改進或發明的事物和生活的種種可能性，如我也許會談論一個新的科學發明或一個更好的方法來表達我的感受',
    Q11B: '實際具體的關於「此時此地」的事物，如我也許會談論品酒的好方法或我即將要參加的新奇旅程',
    Q12T: 'Q12 . 我是這樣的人...',
    Q12A: '喜歡先看整個大局面',
    Q12B: '喜歡先拿捏細節',
    Q13T: 'Q13 . 我的思考類型是...',
    Q13A: '與其活在現實中，我選擇活在我的想像裡',
    Q13B: '與其活在我的想像裡，我選擇活在現實中',
    Q14T: 'Q14 . 我通常...',
    Q14A: '偏向於去想像一大堆關於即將來臨的約會中的事情',
    Q14B: '偏向於拘緊地想像即將來臨的約會，期待讓它自然地發生',
    Q15T: 'Q15 . 我傾向如此做決定...',
    Q15A: '先依我的心意，再依我的邏輯',
    Q15B: '先依我的邏輯，再依我的心意',
    Q16T: 'Q16 . 我傾向比較能夠察覺到...',
    Q16A: '當人們需要情感上的支持時',
    Q16B: '當人們不合邏輯時',
    Q17T: 'Q17 . 當與某人分手時...',
    Q17A: '我通常讓自己的情緒深陷其中很難抽身而出',
    Q17B: '雖然我覺得受傷，但一旦下定決心會直截了當地將過去戀人的影子甩開',
    Q18T: 'Q18 . 當與一個人交往時我傾向衡量...',
    Q18A: '情感上的相容性：表達愛意和對另一半的需求很敏感',
    Q18B: '智慧上的相容性：溝通重要的想法與客觀地討論辯論事情',
    Q19T: 'Q19 . 當我不同意我情人的想法時...',
    Q19A: '我盡可能地避免傷害對方的感受，若是會對對方造成傷害的話就不說',
    Q19B: '我通常毫無保留地說話，並且對我的情人直言直語，因為對的就是對的',
    Q20T: 'Q20 . 認識我的人傾向形容我為...',
    Q20A: '熱情和敏感的',
    Q20B: '邏輯和明確的',
    Q21T: 'Q21 . 我把大部分和別人的相遇視為...',
    Q21A: '友善及重要的',
    Q21B: '另有目的',
    Q22T: 'Q22 . 若我有時間和金錢朋友邀請我到國外度假，並且在一天前才通知，我會...',
    Q22A: '需先檢查我的時間表',
    Q22B: '立即收拾行囊',
    Q23T: 'Q23 . 在第一次約會中我...',
    Q23A: '若我所約的人來遲了會很不高興',
    Q23B: '一點都不在乎，因為自己常常遲到',
    Q24T: 'Q24 . 我偏好...',
    Q24A: '事先知道約會的行程：要去哪裡、有誰參加、我會在哪裡多久、該如何打扮',
    Q24B: '讓約會自然地發生，不做先前太多的計劃',
    Q25T: 'Q25 . 我選擇的生活循環著...',
    Q25A: '日程表和組織性',
    Q25B: '自然發生和彈性',
    Q26T: 'Q26 . 哪一項較為常見？',
    Q26A: '我準時出席而其他人遲到',
    Q26B: '其他人都準時出席而我遲到',
    Q27T: 'Q27 . 我是喜歡這樣的人...',
    Q27A: '下定決心並且做出最後肯定的結論',
    Q27B: '不限定我的選擇並且持續收集資訊',
    Q28T: 'Q28 . 我是這類型的人...',
    Q28A: '喜歡在一個時間裡專心做一件事情直到完成',
    Q28B: '享受同時進行好幾件事情'
}

const typeItems = [{
    originsType: 'ESTJ',
    nameType: '大男人型',
    thinkType: '外向+感覺+理性+判斷',
    explainType: '講實際、重現實、公事，由於有天生的商業或機械學頭腦，所以對抽象理論不感興趣希望學習以使可以直接和立即應用。喜歡組織和參與活動，通常能做優秀的領導人，果斷、迅速行動起來執行決定，考慮日常事務的各種細節。'
}, {
    originsType: 'ESTP',
    nameType: '挑戰型',
    thinkType: '外向+感覺+理性+理解',
    explainType: '擅長於現場解決問題。喜歡行動，對任何的進展都感到高興。往往喜好機械的東西和運動，並願意朋友在旁邊。善應變、容忍、重實效，集中精力于取得成果，不喜多加解釋。最喜好能幹好、能掌握、能分析、能合一的交際事物。'
}, {
    originsType: 'ESFJ',
    nameType: '主人型',
    thinkType: '外向+感覺+情感+判斷',
    explainType: '熱心、健談、受歡迎，有責任心的天生的合作者，積極的委員會成員。要求和諧並可能長於創造和諧，經常為別人做好事，能得到鼓勵和讚揚時工作最出色。主要的興趣在於那些對人們的生活有直接和明顯的影響的事情。'
}, {
    originsType: 'ESFP',
    nameType: '表演型',
    thinkType: '外向+感覺+情感+理解',
    explainType: '開朗、隨和、友善、喜歡一切並使事物由於他們的喜好而讓別人感到更有興趣。喜歡行動並力促事情發生，他們了解正在發生的事情並積極參與。認為記住事實比掌握理論更為容易，在需要豐富的知識和實際能力的情況下表現最佳。'
}, {
    originsType: 'ENTJ',
    nameType: '將軍型',
    thinkType: '外向+直覺+理性+判斷',
    explainType: '直率、果斷，各種活動的領導者，發展和完成完整的體系去解決機構的問題。長於需要論據和機智的談吐的任何事情，如公開演講之類。往往很有學識並喜好增加其知識。'
}, {
    originsType: 'ENTP',
    nameType: '發明家',
    thinkType: '外向+直覺+理性+理解',
    explainType: '敏捷、有發明天才，長於許多事情，有鼓勵性的伙伴、機警、直言，可能出於逗趣而爭論問題的任何一個方面。在解決新的、挑戰性的問題方面富於機智，但可能忽視日常工作，易把興趣從一點轉移到另一點。能夠輕而易舉地為他們的要求找到合乎邏輯的理由。'
}, {
    originsType: 'ENFJ',
    nameType: '教育家',
    thinkType: '外向+直覺+情感+判斷',
    explainType: '敏感、負責任，真正地關心他人的所想所願。處理事情時盡量適當考慮別人的感情，能提出建議或輕鬆而機智地領導小組討論。喜社交、受歡迎、有同情心。對表揚和批評敏感。喜歡給人以方便並使人們發揮其潛力。'
}, {
    originsType: 'ENFP',
    nameType: '記者型',
    thinkType: '外向+直覺+情感+理解',
    explainType: '極為熱心、極富朝氣、機敏、富於想像力。幾乎能夠做他們感興趣的任何事情，對任何困難都能迅速給出解決辦法並隨時準備去幫助任何一個遇到難題的人。常常依據他們自己的能力去即席成事，而不是事先準備。經常能對他們想做的任何事情找到令人信服的理由。'
}, {
    originsType: 'ISTJ',
    nameType: '公務型',
    thinkType: '內向+感覺+情感+判斷',
    explainType: '嚴肅、少言、依靠精力集中和有始有終。注重實踐、有秩序、實事求是、有邏輯、現實、值得信賴、設法組織好每樣事情。負責任、他們自己決定該做什麼並不願反對和干擾、堅定不移地去完成它。'
}, {
    originsType: 'ISTP',
    nameType: '冒險家',
    thinkType: '內向+感覺+情感+理解',
    explainType: '冷靜的旁觀者、少言、自制、以獨有的好奇心和出人意料的有創意的幽默觀察和分析生活。往往對起因和結果感興趣，也對機械的事物怎麼及為什麼奏效及用邏輯原理組織事實傾注興趣。擅長抓住實際問題的核心並尋求解決辦法。'
}, {
    originsType: 'ISFJ',
    nameType: '照顧型',
    thinkType: '內向+感覺+情感+判斷',
    explainType: '少言、友善、負責任又認真。盡心地工作以盡職責，可以使任何項目和群體更加穩定。周到、刻苦、準確，他們的興趣通常不是技術性的。能對必要的細節有耐心、忠貞、體諒人、有洞察力、關心別人的想法。'
}, {
    originsType: 'ISFP',
    nameType: '藝術家',
    thinkType: '內向+感覺+情感+理解',
    explainType: '羞怯、不事聲張的友善、敏感、和諧、謙虛看待自己的能力。回避爭論，不將自己的觀點和價值觀強加于人。一般說，無意于做領導工作，但常常是忠實的追隨者，因為他們享受眼前的樂趣，所以事情做完經常鬆懈而不願讓過度的緊迫和費事來破壞這種享受。'
}, {
    originsType: 'INTJ',
    nameType: '專家型',
    thinkType: '內向+直覺+理性+判斷',
    explainType: '具有創造性的思想並大力推動他們自己的主意和目標。目光遠大、對外部事件能迅速找到有意義的模式。在吸引他們的領域，他們有很好的能力去組織工作並將其進行到底。不輕信、具批判性、獨立性、有決心，對能力和行動有高的標準。'
}, {
    originsType: 'INTP',
    nameType: '學者型',
    thinkType: '內向+直覺+理性+理解',
    explainType: '沈默寡言，特別喜歡理論上或科學方面的追求，喜愛用邏輯和分析解決問題。主要有興趣於出主意，不大喜歡聚會和閑聊天。傾向于有明確範圍的愛好，謀求他們的某些特別的愛好能得到運用和有用的那些職業。'
}, {
    originsType: 'INFJ',
    nameType: '作家型',
    thinkType: '內向+直覺+情感+判斷',
    explainType: '依靠堅毅不拔取得成功，富創造力，希望做需要做和想要做的事情。全力投入自己的工作、沈靜地堅強、責任心強、關心他人。因其堅定的原則而受尊重，由于他們在如何最好為公共利益服務等方面的明晰的洞察力，別人可能會尊重和追隨他們。'
}, {
    originsType: 'INFP',
    nameType: '哲學家',
    thinkType: '內向+直覺+情感+理解',
    explainType: '沈穩的觀察者、理想主意、忠實、看重外在的生活和內在的價值的一致。有求知欲，能迅速發出各種可能性，常常起到促進實行一些主張的作用。只要某種價值觀不受到威脅，他們都善應變、靈活和接受。願意諒解別人和了解充分發揮人的潛力的方法，對財富和周圍的事物不太關心。'
}]
let array = []
let newString = ''
let arrayPos;
let count = -1
let testText = ''
let switchs = false
let stopTimeSet;

next.textContent = '開始'

function choose() {
    switchs = true
    if (switchs !== true) return;
    switchs = false
    console.log(array)
    switch (this.dataset.choose) {
        case 'A':
            chooseFt.classList.add('texts-trans')
            chooseSd.classList.remove('texts-trans')
            if (count >= 0 && count <= 6) {
                if (array.includes('I') == true) {
                    arrayPos = array.findIndex(key => key == 'I')
                    array.splice(arrayPos, 1)
                }
                array.includes('E') == true ? null : array.push('E')
            } else if (count >= 7 && count <= 13) {
                if (array.includes('S') == true) {
                    arrayPos = array.findIndex(key => key == 'S')
                    array.splice(arrayPos, 1)
                }
                array.includes('N') == true ? null : array.push('N')
            } else if (count >= 14 && count <= 20) {
                if (array.includes('T') == true) {
                    arrayPos = array.findIndex(key => key == 'T')
                    array.splice(arrayPos, 1)
                }
                array.includes('F') == true ? null : array.push('F')
            } else if (count >= 21 && count <= 27) {
                if (array.includes('P') == true) {
                    arrayPos = array.findIndex(key => key == 'P')
                    array.splice(arrayPos, 1)
                }
                array.includes('J') == true ? null : array.push('J')
            }
            break;
        case 'B':
            chooseSd.classList.add('texts-trans')
            chooseFt.classList.remove('texts-trans')
            if (count >= 0 && count <= 6) {
                if (array.includes('E') == true) {
                    arrayPos = array.findIndex(key => key == 'E')
                    array.splice(arrayPos, 1)
                }
                array.includes('I') == true ? null : array.push('I')
            } else if (count >= 7 && count <= 13) {
                if (array.includes('N') == true) {
                    arrayPos = array.findIndex(key => key == 'N')
                    array.splice(arrayPos, 1)
                }
                array.includes('S') == true ? null : array.push('S')
            } else if (count >= 14 && count <= 20) {
                if (array.includes('F') == true) {
                    arrayPos = array.findIndex(key => key == 'F')
                    array.splice(arrayPos, 1)
                }
                array.includes('T') == true ? null : array.push('T')
            } else if (count >= 21 && count <= 27) {
                if (array.includes('J') == true) {
                    arrayPos = array.findIndex(key => key == 'J')
                    array.splice(arrayPos, 1)
                }
                array.includes('P') == true ? null : array.push('P')
            }
            break;
    }

}

function addTimer() {
    // if (switchs !== false) {
    //     console.log('點擊文字選項後繼續')
    //     return
    // } else 先關功能待測試完成後再復原
    if (Qouter.classList.length >= 3) {
        Qouter.classList.remove('Qadd-in')
        Qouter.classList.add('Qadd-out')
        setTimeout(() => {
            chooseFt.classList.remove('texts-trans')
            chooseSd.classList.remove('texts-trans')
        }, 900)
        stopTimeSet = setTimeout(() => {
            Qouter.classList.remove('Qadd-out')
            Qouter.classList.add('Qadd-in')
        }, 1000)
    } else {
        setTimeout(() => Qouter.classList.add('Qadd-in'), 1000)
        Qouter.classList.remove('Qadd-out')
    }

    if (count <= 0) {
        this.classList.add('next-trans')
        setTimeout(() => this.classList.remove('next-trans'), 490)
    } else {
        this.classList.add('next-trans-pos')
        this.classList.remove('next-trans')
        setTimeout(() => this.classList.remove('next-trans-pos'), 490)
    }

    if (count == -1) {
        this.classList.add('next-trans')
        this.style.cssText = 'opacity: 0;'
        document.querySelector('.explain').classList.remove('explain-show')
        setTimeout(() => {
            this.classList.remove('next-trans')
            this.style.cssText = 'opacity: 1;'
        }, 1000)
        setTimeout(() => document.querySelector('.explain').style.display = 'none', 1001);
        setTimeout(() => Qouter.style.display = 'flex', 1003);
    } else if (count == -2) {
        testText = ''
        newString = ''
        this.classList.add('next-move-out')
        typeTextContent.classList.add('type-text-content-hide')
        setTimeout(() => {
            document.querySelector('.explain').style.display = 'flex'
            typeTextContent.textContent = ''
            this.classList.add('next-small')
        }, 990);
        setTimeout(() => {
            document.querySelector('.explain').classList.add('explain-show')
            typeTextContent.classList.remove('type-text-content-hide')
            typeTextContent.classList.remove('type-text-content-in')
            this.classList.remove('next-move-out')
            this.classList.remove('next-move')
        }, 1110);
        setTimeout(() => {
            this.classList.remove('next-small')
            next.textContent = '開始'
            this.style.cssText = 'opacity: 1;'
        }, 1310);
    }
    switchs = true
    count += 1
    newString += array.join('')
    console.log(array)
    console.log(switchs)
    setTimeout(() => {
        switch (count) {
            case 0:
                this.textContent = '下一題'
                this.classList.add('btn-start')
                quest.textContent = Qitems.Q1T
                chooseFt.textContent = Qitems.Q1A
                chooseSd.textContent = Qitems.Q1B
                chooseFt.classList.remove('texts-hide')
                chooseSd.classList.remove('texts-hide')
                break;
            case 1:
                this.classList.add('next-active')
                prev.classList.add('prev-active')
                prev.classList.add('btn-start')
                prev.textContent = '上一題'
                quest.textContent = Qitems.Q2T
                chooseFt.textContent = Qitems.Q2A
                chooseSd.textContent = Qitems.Q2B
                break;
            case 2:
                quest.textContent = Qitems.Q3T
                chooseFt.textContent = Qitems.Q3A
                chooseSd.textContent = Qitems.Q3B
                break;
            case 3:
                quest.textContent = Qitems.Q4T
                chooseFt.textContent = Qitems.Q4A
                chooseSd.textContent = Qitems.Q4B
                break;
            case 4:
                quest.textContent = Qitems.Q5T
                chooseFt.textContent = Qitems.Q5A
                chooseSd.textContent = Qitems.Q5B
                break;
            case 5:
                quest.textContent = Qitems.Q6T
                chooseFt.textContent = Qitems.Q6A
                chooseSd.textContent = Qitems.Q6B
                break;
            case 6:
                quest.textContent = Qitems.Q7T
                chooseFt.textContent = Qitems.Q7A
                chooseSd.textContent = Qitems.Q7B
                break;
            case 7:
                quest.textContent = Qitems.Q8T
                chooseFt.textContent = Qitems.Q8A
                chooseSd.textContent = Qitems.Q8B
                break;
            case 8:
                quest.textContent = Qitems.Q9T
                chooseFt.textContent = Qitems.Q9A
                chooseSd.textContent = Qitems.Q9B
                break;
            case 9:
                quest.textContent = Qitems.Q10T
                chooseFt.textContent = Qitems.Q10A
                chooseSd.textContent = Qitems.Q10B
                break;
            case 10:
                quest.textContent = Qitems.Q11T
                chooseFt.textContent = Qitems.Q11A
                chooseSd.textContent = Qitems.Q11B
                break;
            case 11:
                quest.textContent = Qitems.Q12T
                chooseFt.textContent = Qitems.Q12A
                chooseSd.textContent = Qitems.Q12B
                break;
            case 12:
                quest.textContent = Qitems.Q13T
                chooseFt.textContent = Qitems.Q13A
                chooseSd.textContent = Qitems.Q13B
                break;
            case 13:
                quest.textContent = Qitems.Q14T
                chooseFt.textContent = Qitems.Q14A
                chooseSd.textContent = Qitems.Q14B
                break;
            case 14:
                quest.textContent = Qitems.Q15T
                chooseFt.textContent = Qitems.Q15A
                chooseSd.textContent = Qitems.Q15B
                break;
            case 15:
                quest.textContent = Qitems.Q16T
                chooseFt.textContent = Qitems.Q16A
                chooseSd.textContent = Qitems.Q16B
                break;
            case 16:
                quest.textContent = Qitems.Q17T
                chooseFt.textContent = Qitems.Q17A
                chooseSd.textContent = Qitems.Q17B
                break;
            case 17:
                quest.textContent = Qitems.Q18T
                chooseFt.textContent = Qitems.Q18A
                chooseSd.textContent = Qitems.Q18B
                break;
            case 18:
                quest.textContent = Qitems.Q19T
                chooseFt.textContent = Qitems.Q19A
                chooseSd.textContent = Qitems.Q19B
                break;
            case 19:
                quest.textContent = Qitems.Q20T
                chooseFt.textContent = Qitems.Q20A
                chooseSd.textContent = Qitems.Q20B
                break;
            case 20:
                quest.textContent = Qitems.Q21T
                chooseFt.textContent = Qitems.Q21A
                chooseSd.textContent = Qitems.Q21B
                break;
            case 21:
                quest.textContent = Qitems.Q22T
                chooseFt.textContent = Qitems.Q22A
                chooseSd.textContent = Qitems.Q22B
                break;
            case 22:
                quest.textContent = Qitems.Q23T
                chooseFt.textContent = Qitems.Q23A
                chooseSd.textContent = Qitems.Q23B
                break;
            case 23:
                quest.textContent = Qitems.Q24T
                chooseFt.textContent = Qitems.Q24A
                chooseSd.textContent = Qitems.Q24B
                break;
            case 24:
                quest.textContent = Qitems.Q25T
                chooseFt.textContent = Qitems.Q25A
                chooseSd.textContent = Qitems.Q25B
                break;
            case 25:
                quest.textContent = Qitems.Q26T
                chooseFt.textContent = Qitems.Q26A
                chooseSd.textContent = Qitems.Q26B
                break;
            case 26:
                quest.textContent = Qitems.Q27T
                chooseFt.textContent = Qitems.Q27A
                chooseSd.textContent = Qitems.Q27B
                break;
            case 27:
                quest.textContent = Qitems.Q28T
                chooseFt.textContent = Qitems.Q28A
                chooseSd.textContent = Qitems.Q28B
                break;
            case 28:
                count = -2
                clearTimeout(stopTimeSet)
                setTimeout(() => finalSum(), 500)
                this.classList.remove('next-active')
                this.classList.remove('btn-start')
                prev.classList.remove('prev-active')
                prev.classList.remove('btn-start')
                this.classList.add('next-trans-hide')
                break;
        }
    }, 900)
    setTimeout(() => {
        chooseFt.textContent.length > 27 ? chooseFt.style.textAlign = 'justify !important' : chooseFt.style.textAlign =
            'center !important'
        chooseSd.textContent.length > 27 ? chooseSd.style.textAlign = 'justify !important' : chooseSd.style.textAlign =
            'center !important'
    }, 910)
    setTimeout(() => array = [], 10)
    console.log(count)
    console.log(newString)
}

function removeTimer() {
    count -= 1
    if (count >= 0) {
        this.classList.add('prev-trans-pos')
        setTimeout(() => this.classList.remove('prev-trans-pos'), 490)
    }
    if (Qouter.classList.length >= 3) {
        Qouter.classList.add('Qremove-in')
        Qouter.classList.remove('Qadd-in')
        setTimeout(() => {
            chooseFt.classList.remove('texts-trans')
            chooseSd.classList.remove('texts-trans')
        }, 900)
        setTimeout(() => {
            Qouter.classList.remove('Qremove-in')
            Qouter.classList.add('Qadd-in')
        }, 1000)
    }
    newString = newString.substring(0, newString.length - 1)
    setTimeout(() => {
        switch (count) {
            case 0:
                next.classList.remove('next-active')
                prev.classList.remove('prev-active')
                quest.textContent = Qitems.Q1T
                chooseFt.textContent = Qitems.Q1A
                chooseSd.textContent = Qitems.Q1B
                break;
            case 1:
                quest.textContent = Qitems.Q2T
                chooseFt.textContent = Qitems.Q2A
                chooseSd.textContent = Qitems.Q2B
                break;
            case 2:
                quest.textContent = Qitems.Q3T
                chooseFt.textContent = Qitems.Q3A
                chooseSd.textContent = Qitems.Q3B
                break;
            case 3:
                quest.textContent = Qitems.Q4T
                chooseFt.textContent = Qitems.Q4A
                chooseSd.textContent = Qitems.Q4B
                break;
            case 4:
                quest.textContent = Qitems.Q5T
                chooseFt.textContent = Qitems.Q5A
                chooseSd.textContent = Qitems.Q5B
                break;
            case 5:
                quest.textContent = Qitems.Q6T
                chooseFt.textContent = Qitems.Q6A
                chooseSd.textContent = Qitems.Q6B
                break;
            case 6:
                quest.textContent = Qitems.Q7T
                chooseFt.textContent = Qitems.Q7A
                chooseSd.textContent = Qitems.Q7B
                break;
            case 7:
                quest.textContent = Qitems.Q8T
                chooseFt.textContent = Qitems.Q8A
                chooseSd.textContent = Qitems.Q8B
                break;
            case 8:
                quest.textContent = Qitems.Q9T
                chooseFt.textContent = Qitems.Q9A
                chooseSd.textContent = Qitems.Q9B
                break;
            case 9:
                quest.textContent = Qitems.Q10T
                chooseFt.textContent = Qitems.Q10A
                chooseSd.textContent = Qitems.Q10B
                break;
            case 10:
                quest.textContent = Qitems.Q11T
                chooseFt.textContent = Qitems.Q11A
                chooseSd.textContent = Qitems.Q11B
                break;
            case 11:
                quest.textContent = Qitems.Q12T
                chooseFt.textContent = Qitems.Q12A
                chooseSd.textContent = Qitems.Q12B
                break;
            case 12:
                quest.textContent = Qitems.Q13T
                chooseFt.textContent = Qitems.Q13A
                chooseSd.textContent = Qitems.Q13B
                break;
            case 13:
                quest.textContent = Qitems.Q14T
                chooseFt.textContent = Qitems.Q14A
                chooseSd.textContent = Qitems.Q14B
                break;
            case 14:
                quest.textContent = Qitems.Q15T
                chooseFt.textContent = Qitems.Q15A
                chooseSd.textContent = Qitems.Q15B
                break;
            case 15:
                quest.textContent = Qitems.Q16T
                chooseFt.textContent = Qitems.Q16A
                chooseSd.textContent = Qitems.Q16B
                break;
            case 16:
                quest.textContent = Qitems.Q17T
                chooseFt.textContent = Qitems.Q17A
                chooseSd.textContent = Qitems.Q17B
                break;
            case 17:
                quest.textContent = Qitems.Q18T
                chooseFt.textContent = Qitems.Q18A
                chooseSd.textContent = Qitems.Q18B
                break;
            case 18:
                quest.textContent = Qitems.Q19T
                chooseFt.textContent = Qitems.Q19A
                chooseSd.textContent = Qitems.Q19B
                break;
            case 19:
                quest.textContent = Qitems.Q20T
                chooseFt.textContent = Qitems.Q20A
                chooseSd.textContent = Qitems.Q20B
                break;
            case 20:
                quest.textContent = Qitems.Q21T
                chooseFt.textContent = Qitems.Q21A
                chooseSd.textContent = Qitems.Q21B
                break;
            case 21:
                quest.textContent = Qitems.Q22T
                chooseFt.textContent = Qitems.Q22A
                chooseSd.textContent = Qitems.Q22B
                break;
            case 22:
                quest.textContent = Qitems.Q23T
                chooseFt.textContent = Qitems.Q23A
                chooseSd.textContent = Qitems.Q23B
                break;
            case 23:
                quest.textContent = Qitems.Q24T
                chooseFt.textContent = Qitems.Q24A
                chooseSd.textContent = Qitems.Q24B
                break;
            case 24:
                quest.textContent = Qitems.Q25T
                chooseFt.textContent = Qitems.Q25A
                chooseSd.textContent = Qitems.Q25B
                break;
            case 25:
                quest.textContent = Qitems.Q26T
                chooseFt.textContent = Qitems.Q26A
                chooseSd.textContent = Qitems.Q26B
                break;
            case 26:
                quest.textContent = Qitems.Q27T
                chooseFt.textContent = Qitems.Q27A
                chooseSd.textContent = Qitems.Q27B
                break;
            case 27:
                quest.textContent = Qitems.Q28T
                chooseFt.textContent = Qitems.Q28A
                chooseSd.textContent = Qitems.Q28B
                break;
        }
    }, 900)
    setTimeout(() => {
        chooseFt.textContent.length > 27 ? chooseFt.style.textAlign = 'justify' : chooseFt.style.textAlign =
            'center'
        chooseSd.textContent.length > 27 ? chooseSd.style.textAlign = 'justify' : chooseSd.style.textAlign =
            'center'
    }, 910)
    console.log(count)
    console.log(newString)
}

function finalSum() {
    let eCount = 0
    let iCount = 0
    let sCount = 0
    let nCount = 0
    let tCount = 0
    let fCount = 0
    let jCount = 0
    let pCount = 0
    let finalText = newString.split('')
    finalText.forEach(key => {
        key === 'E' ? console.log(eCount += 1) : null
        key === 'I' ? console.log(iCount += 1) : null
        key === 'S' ? console.log(sCount += 1) : null
        key === 'N' ? console.log(nCount += 1) : null
        key === 'T' ? console.log(tCount += 1) : null
        key === 'F' ? console.log(fCount += 1) : null
        key === 'J' ? console.log(jCount += 1) : null
        key === 'P' ? console.log(pCount += 1) : null
    })
    setTimeout(() => {
        eCount >= 4 ? testText += 'E' : null
        iCount >= 4 ? testText += 'I' : null
        sCount >= 4 ? testText += 'S' : null
        nCount >= 4 ? testText += 'N' : null
        tCount >= 4 ? testText += 'T' : null
        fCount >= 4 ? testText += 'F' : null
        jCount >= 4 ? testText += 'J' : null
        pCount >= 4 ? testText += 'P' : null
    }, 1000)
    setTimeout(() => typeDetails(), 1001)
}

function typeDetails() {
    Qouter.style.display = 'none'
    typeTextContent.innerHTML = `
            <div class="circle-outer">
                <div class="circle"></div>
                <span class="circle-font">計算中</span>
            </div>`
    setTimeout(() => {
        document.querySelector('.circle-outer').classList.add('circle-outer-out')
    }, 6000);
    console.log(testText)
    console.log(typeof (testText))
    typeItems.forEach(key => {
        key.originsType == testText ? setTimeout(() => {
            typeTextContent.classList.add('type-text-content-in')
            typeTextContent.innerHTML = `
                <div class="row">
                    <div class="col-md-12">
                        <span class="type-title">您的類型</span>
                        <span class="type-origins">${key.originsType}</span>
                        <span class="type-name">${key.nameType}</span>
                        <span class="type-think">( ${key.thinkType} )</span>
                    </div>
                    <div class="col-md-12">
                        <p class="type-content">${key.explainType}</p>
                    </div>
                </div>`
        }, 7500) : null
        setTimeout(() => {
            setTimeout(() => {
                next.classList.remove('next-trans-hide')
                next.classList.add('next-move')
            }, 200);
            next.textContent = '重新測驗'
        }, 11500);
    })
}

Qtext.forEach(key => {
    key.addEventListener('click', choose)
})
prev.addEventListener('click', removeTimer)
next.addEventListener('click', addTimer)
window.addEventListener('load', () => {
    document.querySelector('.explain').classList.add('explain-show')
})