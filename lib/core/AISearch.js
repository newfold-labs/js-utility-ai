import apiFetch from "@wordpress/api-fetch";

const base = "newfold-ai/v1";

const AISearch = {
  getSearchResult: (userPrompt, identifier, extra) =>
    apiFetch({
      path: base + "/search",
      method: "POST",
      data: {
        user_prompt: userPrompt,
        identifier: identifier,
        extra: extra,
      },
    }),
  getDefaultSearchResult: () => apiFetch({
    path: base + "/search/default",
    method: "POST",
  })
};

export default AISearch;
