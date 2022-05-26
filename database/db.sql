--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Debian 13.5-0+deb11u1)
-- Dumped by pg_dump version 13.5 (Debian 13.5-0+deb11u1)

-- Started on 2022-05-25 22:01:23 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16399)
-- Name: comments; Type: TABLE; Schema: public; Owner: angular_blog_user
--

CREATE TABLE public.comments (
    "commentId" integer NOT NULL,
    "commentContent" text,
    "postId" integer
);


ALTER TABLE public.comments OWNER TO angular_blog_user;

--
-- TOC entry 202 (class 1259 OID 16397)
-- Name: comments_commentId_seq; Type: SEQUENCE; Schema: public; Owner: angular_blog_user
--

CREATE SEQUENCE public."comments_commentId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."comments_commentId_seq" OWNER TO angular_blog_user;

--
-- TOC entry 3010 (class 0 OID 0)
-- Dependencies: 202
-- Name: comments_commentId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: angular_blog_user
--

ALTER SEQUENCE public."comments_commentId_seq" OWNED BY public.comments."commentId";


--
-- TOC entry 201 (class 1259 OID 16388)
-- Name: posts; Type: TABLE; Schema: public; Owner: angular_blog_user
--

CREATE TABLE public.posts (
    "postId" integer NOT NULL,
    "postContent" text
);


ALTER TABLE public.posts OWNER TO angular_blog_user;

--
-- TOC entry 200 (class 1259 OID 16386)
-- Name: posts_postId_seq; Type: SEQUENCE; Schema: public; Owner: angular_blog_user
--

CREATE SEQUENCE public."posts_postId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."posts_postId_seq" OWNER TO angular_blog_user;

--
-- TOC entry 3011 (class 0 OID 0)
-- Dependencies: 200
-- Name: posts_postId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: angular_blog_user
--

ALTER SEQUENCE public."posts_postId_seq" OWNED BY public.posts."postId";


--
-- TOC entry 2864 (class 2604 OID 16402)
-- Name: comments commentId; Type: DEFAULT; Schema: public; Owner: angular_blog_user
--

ALTER TABLE ONLY public.comments ALTER COLUMN "commentId" SET DEFAULT nextval('public."comments_commentId_seq"'::regclass);


--
-- TOC entry 2863 (class 2604 OID 16391)
-- Name: posts postId; Type: DEFAULT; Schema: public; Owner: angular_blog_user
--

ALTER TABLE ONLY public.posts ALTER COLUMN "postId" SET DEFAULT nextval('public."posts_postId_seq"'::regclass);


--
-- TOC entry 3004 (class 0 OID 16399)
-- Dependencies: 203
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: angular_blog_user
--

COPY public.comments ("commentId", "commentContent", "postId") FROM stdin;
\.


--
-- TOC entry 3002 (class 0 OID 16388)
-- Dependencies: 201
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: angular_blog_user
--

COPY public.posts ("postId", "postContent") FROM stdin;
\.


--
-- TOC entry 3012 (class 0 OID 0)
-- Dependencies: 202
-- Name: comments_commentId_seq; Type: SEQUENCE SET; Schema: public; Owner: angular_blog_user
--

SELECT pg_catalog.setval('public."comments_commentId_seq"', 1, false);


--
-- TOC entry 3013 (class 0 OID 0)
-- Dependencies: 200
-- Name: posts_postId_seq; Type: SEQUENCE SET; Schema: public; Owner: angular_blog_user
--

SELECT pg_catalog.setval('public."posts_postId_seq"', 1, false);


--
-- TOC entry 2868 (class 2606 OID 16407)
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: angular_blog_user
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY ("commentId");


--
-- TOC entry 2866 (class 2606 OID 16396)
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: angular_blog_user
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY ("postId");


--
-- TOC entry 2869 (class 1259 OID 16413)
-- Name: fki_commentsPerPost; Type: INDEX; Schema: public; Owner: angular_blog_user
--

CREATE INDEX "fki_commentsPerPost" ON public.comments USING btree ("postId");


--
-- TOC entry 2870 (class 2606 OID 16408)
-- Name: comments commentsPerPost; Type: FK CONSTRAINT; Schema: public; Owner: angular_blog_user
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "commentsPerPost" FOREIGN KEY ("postId") REFERENCES public.posts("postId") NOT VALID;


-- Completed on 2022-05-25 22:01:23 -03

--
-- PostgreSQL database dump complete
--

