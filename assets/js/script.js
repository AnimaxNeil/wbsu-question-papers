// WBSU Question Papers


const base_url = "/wbsu-question-papers";


const question_papers = [

    "CMSA-1-2017",  //-vhq
    "CMSA-1-2018",  //-vhq
    "CMSA-1-2019",  //-vhq
    "CMSA-2A-2017",  //-vhq
    "CMSA-2A-2018",  //-vhq
    "CMSA-2A-2019",  //-vhq
    "CMSA-3-2017",  //-vhq
    "CMSA-3-2018",  //-vhq
    "CMSA-3-2019",  //-vhq
    "CMSA-4A-2017",  //-vhq
    "CMSA-4A-2018",  //-vhq
    "CMSA-4A-2019",  //-vhq
    "CMSA-5-2018",  //-vhq
    "CMSA-5-2019",  //-vhq
    "CMSA-6-2018",  //-vhq
    "CMSA-6-2019",  //-vhq

    "CMSACOR01T-2021",  //-vhq
    "CMSACOR01T-2022",  //-vhq
    "CMSACOR02T-2021",  //-vhq
    "CMSACOR02T-2022",  //-vhq
    "CMSACOR03T-2021",  //-vhq
    "CMSACOR03T-2022",  //-vhq
    "CMSACOR04T-2021",  //-vhq
    "CMSACOR04T-2022",  //-vhq
    "CMSACOR05T-2022",  //-vhq
    "CMSACOR06T-2022",  //-vhq
    "CMSACOR07T-2022",  //-vhq
    "CMSACOR08T-2020",  //-hq
    "CMSACOR08T-2022",  //-vhq
    "CMSACOR09T-2020",  //-vhq
    "CMSACOR09T-2022",  //-vhq
    "CMSACOR10T-2020",  //-vhq
    "CMSACOR10T-2022",  //-vhq
    "CMSACOR11T-2022",  //-vhq
    "CMSACOR12T-2022",  //-vhq
    "CMSACOR13T-2022",  //-vhq
    "CMSACOR14T-2022",  //-vhq

    "CMSADSE04T-2022",  //-vhq
    "CMSADSE05T-2022",  //-vhq

    "CMSG-1-2017",  //-vhq
    "CMSG-1-2018",  //-vhq
    "CMSG-1-2019",  //-vhq
    "CMSG-3A-2017",  //-vhq
    "CMSG-3A-2018",  //-vhq
    "CMSG-3A-2019",  //-vhq

    "CMSGCOR01T-2022",  //-hq
    "CMSGCOR02T-2022",  //-vhq
    "CMSGCOR03T-2022",  //-hq
    "CMSGCOR04T-2021",  //-mq
    "CMSGCOR04T-2022",  //-vhq

    "CMSGDSE01T-2022",  //-hq
    "CMSGDSE02T-2022",  //-hq
    "CMSGDSE03T-2021",  //-mq
    "CMSGDSE03T-2022",  //-vhq
    "CMSGDSE04T-2021",  //-mq
    "CMSGDSE04T-2022",  //-vhq

]


const search_question_papers = function (year, subject) {
    let results = [];
    for (let name of question_papers) {
        if (name.slice(0, 4) == subject && name.slice(-4) == year) results.push(name);
    }
    return results;
};


const output_search_results = function (search_results, year, subject) {
    const results = search_question_papers(year, subject);
    search_results.innerHTML = `<p class="search-info">( ${results.length} results found for ${year} ${subject} )</p><div class="results-set">`;
    for (let name of results) {
        search_results.innerHTML +=
            `<div class="results-item">
            <span>${name.slice(0, -5)}</span>
            <a href="${base_url}/download/${name}.pdf" target="_blank">Download</a>
        </div>`;
    }
    search_results.innerHTML += `</div>`;
};


document.addEventListener("DOMContentLoaded", function () {

    const search_btn = document.getElementById("search-btn");
    const search_options = document.getElementById("search-options");
    const search_results = document.getElementById("search-results");

    search_btn.addEventListener("click", function () {
        const search_option_year = document.getElementById("search-option-year");
        const search_option_subject = document.getElementById("search-option-subject");
        const year = search_option_year.options[search_option_year.selectedIndex].value;
        const subject = search_option_subject.options[search_option_subject.selectedIndex].value;
        output_search_results(search_results, year, subject);
    });

});
