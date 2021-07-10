import { createAction, props } from "@ngrx/store";
import { BookRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Books Page] Enter");

export const selectBook = createAction(
  "[Book Page] Select Book",
  props<{ bookId: string }>()
);

export const clearSelectedBook = createAction(
  "[Book Page] Clear Selected Book"
);

export const createBook = createAction(
  "[Books Page] Create a Book",
  props<{ book: BookRequiredProps }>()
);
export const updateBook = createAction(
  "[Books Page] Update a Book",
  props<{ bookId: string; changes: BookRequiredProps }>()
);
export const deleteBook = createAction(
  "[Books Page] Update a Book",
  props<{ bookId: string }>()
);

export const cancelEditing = createAction("[Books Page] Cancel Editing a Book");
