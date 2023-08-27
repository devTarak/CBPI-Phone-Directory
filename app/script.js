const contacts = [
    {
        sl: 1,
        name: "মোহসিনুর রহমান, উপাধ্যক্ষ ও অধ্যক্ষ(ভারপ্রাপ্ত)",
        engName: "Mohosinur Rahman, Principal",
        phone: "01795925340",
    },
    {
        sl: 2,
        name: "মুহাম্মদ আমানুল্লাহ, চীফ ইনস্ট্রাক্টর(নন - টেক)।",
        engName: "Mohammed Amanullah",
        phone: "01713674300",
    },
    {
        sl: 3,
        name: "মুহাম্মদ মহিদ্দিন ইনষ্ঠারীর(টেক) ইলেকট্রিক্যাল",
        engName: "Mohammed Mohiuddin",
        phone: "01814766252",
    },
    {
        sl: 4,
        name: "হোসাইন মুহাম্মাদ রবি ইসলাম, ইনার(নন - টেক) পদার্থ",
        engName: "Hosain Mohammed robi hasan",
        phone: "01818380309",
    },
    {
        sl: 5,
        name: "শুভংকর পাল, ইনস্ট্রাক্টর(টেক) কম্পিউটার",
        engName: "Sovonkor poul",
        phone: "01675276591",
    },
    {
        sl: 6,
        name: "প্রকাশ কান্তি দে, ইনস্টাক্টর(টেক) কম্পিউটার",
        engName: "Provash kanti dey",
        phone: "01962823150",
    },
    {
        sl: 7,
        name: "গৌতম মুখ্য, ইনস্ট্রাক্টর(টেক) আরএসি",
        engName: "Gawtom mokkho",
        phone: "01748045850",
    },
    {
        sl: 8,
        name: "মোঃ ইয়াসিনুর রহমান, ইনস্ট্রাক্টর(টেক) আরএসি",
        engName: "md yasinur rahman",
        phone: "61845897548",
    },
    {
        sl: 9,
        name: "সেলিম রেজা, ইনস্ট্রাক্টর(টেক) যুক্ত",
        engName: "selim reja",
        phone: "01737918900",
    },
    {
        sl: 10,
        name: "মোঃ জামশেদুল কবির, ইনস্ট্রাক্টর(নন - টেক) বাংলা",
        engName: "md jamsedul karim",
        phone: "01997155988",
    },
    {
        sl: 11,
        name: "আব্দুল্লাহ আল - মামুন, ইনস্ট্রাক্টর(নন - টেক) পদার্থ বিজ্ঞান",
        engName: "abdullah al mamun",
        phone: "01948304050",
    },
    {
        sl: 12,
        name: "মোঃ আমিনুল, জুনিয়র ইনস্ট্রাক্টর(টেক) সিভিল",
        engName: "aminul",
        phone: "01717545728",
    },
    {
        sl: 13,
        name: "মুহাঃ জাহেদুল ইসলাম, জুনিয়র ইনস্ট্রাক্টর(টেক) সিভিল",
        engName: "md jahedul islam",
        phone: "01720371779",
    },
    {
        sl: 14,
        name: "দেলোয়ার হোছাইন, জুনিয়র ইনস্ট্রাক্টর(নন - টেক) সমাজ বিজ্ঞান",
        engName: "Delwar hosain",
        phone: "01812368482",
    },
    {
        sl: 15,
        name: "হারুন অর রশিদ, জুনিয়র ইনস্ট্রাক্টর(নন - টেক) হিসাব বিজ্ঞান",
        engName: "Harun ar rasid",
        phone: "01933435258",
    },
    {
        sl: 16,
        name: "মুহাম্মদ মিফতাহ উদ্দিন, জুনিয়র ইনস্ট্রাক্টর(নন - টেক) গণিত",
        engName: "mohammed miftah uddin",
        phone: "01835560087",
    },
    {
        sl: 17,
        name: "মোঃ তৌহিদুর রহমান খান, জুনিয়র ইনস্ট্রাক্টর(টেক) ফুড",
        engName: "md towhidur rahman khan",
        phone: "01934210356",
    },
    {
        sl: 18,
        name: "আতিকুর রহমান, জুনিয়র ইনস্ট্রাক্টর(টেক) আরএসি",
        engName: "Atikur rahman",
        phone: "01823153326",
    },
    {
        sl: 19,
        name: "এ.এস.এম.মাঈন উদ্দিন খান, ইনস্ট্রাক্টর(সিভিল)",
        engName: "",
        phone: "01717025920",
    },
    {
        sl: 20,
        name: "রকি চৌধুরী, ইনস্ট্রাক্টর(আরএসি)",
        engName: "",
        phone: "01814784600",
    },
    {
        sl: 21,
        name: "আরিফুল করিম, ইনস্ট্রাক্টর(ফুড)",
        engName: "",
        phone: "01925244234",
    },
    {
        sl: 22,
        name: "কাজী সারোয়ার, ইনস্টা(ফু",
        engName: "",
        phone: "01723789744",
    },
    {
        sl: 23,
        name: "আলমগীর মিয়া, ইনস্ট্রাক্টর(সিভিল)",
        engName: "",
        phone: "01673132628",
    },
    {
        sl: 24,
        name: "মোঃ ফাইজুল ইসলাম, ইনস্ট্রাক্টর(সিভিল)",
        engName: "",
        phone: "01911272347",
    },
    {
        sl: 25,
        name: "মোঃ মাসুদ রানা, ইনস্ট্রাক্টর(কম্পিউটার)",
        engName: "",
        phone: "01719508316",
    },
    {
        sl: 26,
        name: "মোঃ এমদাদুল হক, ইনস্ট্রাক্টর(নন - টেক)",
        engName: "",
        phone: "01734048169",
    },
    {
        sl: 27,
        name: "মোঃ আব্দুল আলীম, ইনস্ট্রাক্টর(নন - টেক)",
        engName: "",
        phone: "01734598154",
    },
    {
        sl: 28,
        name: "আহমেদ রফিক আজিজ, ইনস্ট্রাক্টর(কম্পিউটার)",
        engName: "",
        phone: "01721153960",
    },
    // Page2
    {
        sl: 29,
        name: "কাজী মোঃ ফখরুল আলম, জুনিয়র ইনস্ট্রাক্টর (আরএসি)",
        engName: "",
        phone: "01820191707"
    },
    {
        sl: 30,
        name: "মেহেদী হাসান, জুনিয়র ইনস্ট্রাক্টর (ফুড)",
        engName: "",
        phone: "01840013761"
    },
    {
        sl: 31,
        name: "মোঃ নেছার উদ্দিন, জুনিয়র ইনস্ট্রাক্টর (ফুড)",
        engName: "",
        phone: "01828700803"
    },
    {
        sl: 32,
        name: "শরিফুল ইসলাম, জুনিয়র ইনস্ট্রাক্টর (কম্পিউটার)",
        engName: "",
        phone: "01723906133"
    },
    {
        sl: 33,
        name: "শরিফুল ইসলাম, জুনিয়র ইনস্টার্কের (কম্পিউটার)",
        engName: "",
        phone: "01739941273"
    },
    {
        sl: 34,
        name: "মোঃ আবু জাহিদ, জুনিয়র ইনস্টাধর (আরএসি)",
        engName: "",
        phone: "01723079651"
    },
    {
        sl: 35,
        name: "মোঃ মামুনুর রশীদ, জুনিয়র ইনস্ট্রাক্টর (নন-টেক)",
        engName: "",
        phone: "01737322532"
    },
    {
        sl: 36,
        name: "মোঃ আব্দুল মতিন, জুনিয়র ইনস্ট্রাক্টর (নন-টেক)",
        engName: "",
        phone: "01737191044"
    },
    {
        sl: 37,
        name: "মোঃ সাইফুল ইসলাম, ক্রাফট ইনস্ট্রাক্টর (টিআর) সিভিল",
        engName: "",
        phone: "01816382217"
    },
    {
        sl: 38,
        name: "মোঃ মনিরুজ্জামান, ক্রাফট ইনস্ট্যান্টর (সপ) আরএসি",
        engName: "",
        phone: "01756434228"
    },
    {
        sl: 39,
        name: "মোশারফ হোছাইন, ল্যাব সহকারী",
        engName: "",
        phone: "01812368299"
    },
    {
        sl: 40,
        name: "মোঃ মহসিন, ক্রাফট ইনস্ট্রাক্টর (টিআর) সিভিল",
        engName: "",
        phone: "01812023499"
    },
    {
        sl: 41,
        name: "প্রলয় কান্তি সুশীল, ক্রাফট ইনস্ট্রাক্টর (সপ) সিভিল",
        engName: "",
        phone: "01306276981"
    },
    {
        sl: 42,
        name: "মোঃ আবু হানিফ, ক্রাফট ইনস্ট্রাক্টর (সপ) সিভিল",
        engName: "",
        phone: "01820050020"
    },
    {
        sl: 43,
        name: "আনিসুজ্জামান রোমান, ক্রাফট ইনস্ট্রাক্টর (সপ) সিভিল",
        engName: "",
        phone: "01722930979"
    },
    {
        sl: 44,
        name: "মোঃ জাহাঙ্গীর শাহ তালুকদার, ক্রাফট ইনস্ট্রাক্টর (সেপ) সিভিল",
        engName: "",
        phone: "01853048330"
    },
    {
        sl: 45,
        name: "আল হাসনাত রেজায়ে রাত্রী, ক্রাফট ইনস্ট্রাক্টর (সপ) কম্পিউটার",
        engName: "",
        phone: "01521485017"
    },
    {
        sl: 46,
        name: "রিপন কান্তি সুশীল, ক্রাফট ইনস্ট্রাক্টর (সপ) কম্পিউটার",
        engName: "",
        phone: "01955033521"
    },
    {
        sl: 47,
        name: "লোকনাথ চন্দ্র গোলদার, ক্রাফট ইনস্ট্রাক্টর (সপ) কম্পিউটার",
        engName: "",
        phone: "01918675924"
    },
    {
        sl: 48,
        name: "মোঃ ইফতেখার হোসেন, ক্রাফট ইনস্টাক্টর (সপ) কম্পিউটার",
        engName: "",
        phone: "01674475775"
    },
    {
        sl: 49,
        name: "শুভ চৌধুরী, ক্রাফট ইনস্ট্রাক্টর (সপ) আরএসি",
        engName: "",
        phone: "01830108278"
    },
    {
        sl: 50,
        name: "মোঃ আব্দুল মান্নান, ক্রাফট ইনস্ট্রাক্টর (সপ) আরএসি)",
        engName: "",
        phone: "01521408861"
    },
    {
        sl: 51,
        name: "এস.এম. কিবরিয়া, ক্রাফট ইনস্ট্রাক্টর (সপ) ফুড",
        engName: "",
        phone: "01829446290"
    },
    {
        sl: 52,
        name: "নুর মোহাম্মদ, ক্রাফট ইনস্ট্রাক্টর (সপ) যুক্ত",
        engName: "",
        phone: "01813095885"
    },
    {
        sl: 53,
        name: "সারোয়ার হোসেন রাহী, ফ্রাফট ইনস্ট্রাক্টর (সপ) ট্যুরিজম",
        engName: "",
        phone: "01905242098"
    },
    {
        sl: 54,
        name: "রাধী চক্রবর্তী, ক্রাফট ইনস্টাধর (সপ) ট্যুরিজম",
        engName: "",
        phone: "01521554266"
    },
    {
        sl: 55,
        name: "মোঃ ফরিদ উদ্দিন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "",
        phone: "01853435654"
    },
    {
        sl: 56,
        name: "আবছার উদ্দিন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "",
        phone: "01741100800"
    },
    {
        sl: 57,
        name: "ইকবাল বাহার, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "",
        phone: "01832172517"
    },
    {
        sl: 58,
        name: "মোহাম্মদ ফখরুল ইসলাম, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "",
        phone: "01626342025"
    },
    {
        sl: 59,
        name: "মোঃ শরীফুল ইসলাম, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "",
        phone: "01930858985"
    },
    {
        sl: 60,
        name: "জুয়েল পারভেজ, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) কম্পিউটার",
        engName: "",
        phone: "01916519959"
    },

    // Page3
    {
        sl: 61,
        name: "মোঃ বিল্লাল হোসেন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) কম্পিউটার",
        engName: "",
        phone: "01521102474",
    },
    {
        sl: 62,
        name: "আরিফুল হক, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) কম্পিউটার",
        engName: "",
        phone: "01915155325",
    },
    {
        sl: 63,
        name: "মোঃ কামাল উদ্দিন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) আরএসি",
        engName: "",
        phone: "01823311832",
    },
    {
        sl: 64,
        name: "হিমিকা বড়ুয়া, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) আরএসি",
        engName: "",
        phone: "01965789105",
    },
    {
        sl: 65,
        name: "ছৈয়াদা হুমায়ারা, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) আরএসি",
        engName: "",
        phone: "01832064361",
    },
    {
        sl: 66,
        name: "অপরাজিতা দত্ত, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) আরএসি",
        engName: "",
        phone: "01849214461",
    },
    {
        sl: 67,
        name: "সুজন চন্দ্র দাস, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) ফুড",
        engName: "",
        phone: "01521484506",
    },
    {
        sl: 68,
        name: "মোঃ সাইফুল্লাহ জামান, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) ফুড",
        engName: "",
        phone: "01538118053",
    },
    {
        sl: 69,
        name: "মোঃ রবিউল হোসেন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) ফুড",
        engName: "",
        phone: "01818308662",
    },
    {
        sl: 70,
        name: "বিজয় ত্রিপুরা, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) ট্যুরিজম",
        engName: "",
        phone: "01517113273",
    },
    {
        sl: 71,
        name: "মোহাঃ মাসুদুর রহমান, স্টোর কিপার",
        engName: "",
        phone: "01720932626",
    },
    {
        sl: 72,
        name: "মোহাম্মদ আলমগীর হোসেন, ডাটা প্রসেসর",
        engName: "",
        phone: "01555047503",
    },
    {
        sl: 73,
        name: "মোহাম্মদ হারুন-অর-রশীদ, ডাটা প্রসেসর",
        engName: "",
        phone: "01816130186",
    },
    {
        sl: 74,
        name: "মোহাম্মদ মেহেদী হাসান, হিসাব সহকারী",
        engName: "",
        phone: "01845581302",
    },
    {
        sl: 75,
        name: "মোঃ শারাফ তালুকদার সুজন, ল্যাবরেটরী সহকারী (বিজ্ঞান)",
        engName: "",
        phone: "01608848008",
    },
    {
        sl: 76,
        name: "আবদুল মান্নান, সিকিউরিটি গার্ড",
        engName: "",
        phone: "01812368622",
    },
    {
        sl: 77,
        name: "উহ্লা মং মারমা, সিকিউরিটি গার্ড",
        engName: "",
        phone: "01734092171",
    },
    {
        sl: 78,
        name: "এন্ড্রু ত্রিপুরা, সিকিউরিটি গার্ড",
        engName: "",
        phone: "01556743557",
    },
    {
        sl: 79,
        name: "মুহাম্মদ জকরিয়া, ক্লিনার",
        engName: "",
        phone: "01815674073",
    },
    {
        sl: 80,
        name: "মোঃ জহিরুল ইসলাম, ক্লিনার",
        engName: "",
        phone: "01722543623",
    },
    {
        sl: 81,
        name: "মুহুঃ খুরশেদুল আলম, ক্লিনার",
        engName: "",
        phone: "01875512154",
    },
    {
        sl: 82,
        name: "সবুজ বড়ুয়া, ক্লিনার",
        engName: "",
        phone: "01813590587",
    },
    {
        sl: 83,
        name: "অরুন চন্দ্র দাস, সুইপার",
        engName: "",
        phone: "01814855325",
    },
    {
        sl: 84,
        name: "সাগর মল্লিক, সুইপার",
        engName: "",
        phone: "01866352955",
    },
    {
        sl: 85,
        name: "আজিজুল হক, খন্ডকালীন ড্রাইভার",
        engName: "",
        phone: "01887231434",
    },
    {
        sl: 86,
        name: "মোঃ তাজিম, খণ্ডকালীন ডাটা প্রসেসর",
        engName: "",
        phone: "01825708840",
    },
    {
        sl: 87,
        name: "মোঃ জাফরুল ইসলাম, খণ্ডকালীন ক্লিনার",
        engName: "",
        phone: "01815438816",
    },
    {
        sl: 88,
        name: "মোঃ ইসমাইল, খন্ডকালীন মালী",
        engName: "",
        phone: "01875514674",
    },
    {
        sl: 89,
        name: "ছালামত উল্লাহ, খন্ডকালীন সিকিউরিটি গার্ড",
        engName: "",
        phone: "01836458211",
    },
    {
        sl: 90,
        name: "মোঃ শরিফ, খন্ডকালীন সিকিউরিটি গার্ড",
        engName: "",
        phone: "01823467452",
    },
    {
        sl: 91,
        name: "বিপ্লব মলিক . খন্ডকালীন সইপার",
        engName: "",
        phone: "01884142046",
    },
];

const searchInput = document.getElementById('searchInput');
const contactList = document.getElementById('contactList');
const loadMoreBtn = document.getElementById('loadMoreBtn');

const contactsPerPage = 5;
let currentPage = 1;
let filteredContacts = [];

function filterContacts() {
    const searchValue = searchInput.value.toLowerCase();
    filteredContacts = contacts.filter(contact => {
        return (
            contact.name.toLowerCase().includes(searchValue) ||
            contact.engName.toLowerCase().includes(searchValue)
        );
    });
    displayContactsChunk(0, contactsPerPage);
    currentPage = 1;
    loadMoreBtn.disabled = false;
    loadMoreBtn.textContent = 'Load More';
}

function displayContactsChunk(startIndex, endIndex) {
    const contactsChunk = filteredContacts.slice(startIndex, endIndex);
    contactList.innerHTML = '';
    contactsChunk.forEach(contact => {
        const card = document.createElement('div');
        card.classList.add('contact-card');
        card.innerHTML = `
            <h2>${contact.name}</h2>
            <h3>${contact.engName}</h3>
            <p>Phone: ${contact.phone}</p>
            <button class="call-btn" onclick="callContact('${contact.phone}')">Call</button>
        `;
        contactList.appendChild(card);
    });
}

function loadMoreContacts() {
    const startIndex = currentPage * contactsPerPage;
    const endIndex = startIndex + contactsPerPage;

    if (startIndex < filteredContacts.length) {
        displayContactsChunk(startIndex, endIndex);
        currentPage++;
    } else {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = 'No more contacts';
    }
}

function callContact(phoneNumber) {
    const telLink = document.createElement('a');
    telLink.href = `tel:${phoneNumber}`;
    telLink.click();
}

searchInput.addEventListener('input', filterContacts);
loadMoreBtn.addEventListener('click', loadMoreContacts);

filterContacts();
loadMoreContacts();
