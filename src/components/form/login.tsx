"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/ui-components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/ui-components/ui/input";
import { Button } from "@/ui-components/ui/button";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password at least 8 characters",
  }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" content="Login" />
      </form>
    </Form>
  );
};

export default LoginForm;
