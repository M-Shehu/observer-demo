import { BehaviorSubject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, filter, switchMap, tap, debounceTime } from "rxjs/operators";

const subject$ = new BehaviorSubject({});

const getApiUrl = search =>
  `https://api.vericred.com/zip_counties/?zip_prefix=${search}`;

const transformResponse = ({ response }) => {
  return {
    zipCodes: response.zip_codes.slice(0, 5),
    counties: response.counties,
  };
};

export const getZipCodes = (subject, showLoader) => {
  return subject.pipe(
    debounceTime(500),
    filter(v => v.length > 2),
    map(getApiUrl),
    tap(() => showLoader()),
    switchMap(url =>
      ajax({
        url,
        headers: {
          "Vericred-Api-Key": `${process.env.REACT_APP_VERICRED_API_KEY}`,
          "Accept-Version": "v3",
        },
      })
    ), // call HTTP endpoint and cancel previous requests
    map(transformResponse)
  );
};

export default subject$;
