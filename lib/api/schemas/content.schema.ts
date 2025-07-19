import { z } from "zod";
import { JSONContent } from "@tiptap/core";

const MarkSchema = z.object({
  type: z.string(),
  attrs: z.record(z.unknown()).optional(),
});

const TipTapNodeSchema: z.ZodType<JSONContent> = z.lazy(() =>
  z.object({
    type: z.string(),
    text: z.string().optional(),
    attrs: z.record(z.unknown()).optional(),
    marks: z.array(MarkSchema).optional(),
    content: z.array(TipTapNodeSchema).optional(),
  }),
);

export const TipTapDocumentSchema = z.object({
  type: z.literal("doc").optional(),
  content: z.array(TipTapNodeSchema).optional(),
});
