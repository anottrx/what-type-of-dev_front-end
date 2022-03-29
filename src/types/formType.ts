export interface FormResponseData {
  pageData: SurveyInfo;
}

export interface SurveyInfo {
  pageNo: number;
  pageName: string;
  pageDescription: string;
  pageImageUrl: string;
  survey: Survey[];
}

export interface Survey {
  questionId: number;
  question: string;
  answers: Answers[];
}

export interface Answers {
  answerSeq: number;
  answer: string;
}

export interface SurveyResultRequestType {
  surveyResult: SurveyResult[];
}

export interface SurveyResult {
  questionInitial: number;
  answerSeq: number;
}
export interface Job {
  jobId: number;
  jobName: string;
  jobImgUrl: string;
}

export interface JobRank extends Job {
  jobRank: number;
  jobDescription: string;
}

export interface SurveyResultResponseType {
  rankData: JobRank[];
}
