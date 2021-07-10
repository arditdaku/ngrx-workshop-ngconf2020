import { createAction, props } from "@ngrx/store";
import { BookModel, BookRequiredProps } from "src/app/shared/models";

export const booksLoaded = createAction(
  "[Books Api] Books Loaded Success",
  props<{
    books: BookModel[];
  }>()
);

export const bookCreated = createAction(
  "[Books Api] Create Book",
  props<{
    book: BookModel;
  }>()
);

export const bookUpdated = createAction(
  "[Books Api] Update Book",
  props<{ book: BookModel }>()
);

export const bookDeleted = createAction(
  "[Books Api] Delete Book",
  props<{ bookId: string }>()
);
